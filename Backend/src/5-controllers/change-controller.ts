import express, { NextFunction, Request, Response } from "express";
import { changeService } from "../4-services/change-service";
import { StatusCode } from "../3-models/enums";
import { ChangeModel } from "../3-models/change-model";

class ChangeController {
  // Create a router object for listening to HTTP requests:
  public readonly router = express.Router();

  // Register routes once:
  public constructor() {
    this.registerRoutes();
  }

  // Register routes:
  private registerRoutes(): void {
    this.router.get("/change", this.getAllChange);
    this.router.post("/change", this.addChange);
    this.router.delete("/change/:_id([0-9a-fA-F]{24})", this.deleteChange);
    this.router.put("/change/:_id([0-9a-fA-F]{24})", this.updateChange);
    this.router.get("/change/images/:imageName", this.getImage);
  }

  private async getAllChange(request: Request, response: Response, next: NextFunction): Promise<void> {
    try {
      const change = await changeService.getAllChange();
      response.json(change);
    } catch (err: any) {
      next(err);
    }
  }

  private async addChange(request: Request, response: Response, next: NextFunction): Promise<void> {
    try {
      const file = request.files?.image 
      if (file) request.body.imageName = await fileSaver.add(file);

      const change = new ChangeModel(request.body);
      const addedChange = await changeService.addChange(change);

      response.json(addedChange);
    } catch (err: any) {
      next(err);
    }
  }

  private async deleteChange(request: Request, response: Response, next: NextFunction): Promise<void> {
    try {
      const _id = request.params._id;
      const changeToDelete = await ChangeModel.findById(_id);

      const imageName = changeToDelete.imageName;
      fileSaver.delete(imageName);

      changeService.deleteChange(_id);
      response.sendStatus(StatusCode.NoContent);
    } catch (err: any) {
      next(err);
    }
  }

  public async updateChange(request: Request, response: Response, next: NextFunction) {
    try {
      if (request.files) request.body.imageName = await fileSaver.add(request.files.image as UploadedFile);
      const _id = request.params._id;
      const change = new ChangeModel(request.body);

      const updatedChange = await changeService.updateChange(_id, change);
      response.json(updatedChange);
    } catch (error: any) {
      next(error);
    }
  }

  private async getImage(request: Request, response: Response, next: NextFunction) {
    try {
      const imageName = request.params.imageName;
      const imagePath = fileSaver.getFilePath(imageName, true);
      response.sendFile(imagePath);
    } catch (error: any) {
      next(error);
    }
  }
}

const changeController = new ChangeController();
export const changeRouter = changeController.router;
