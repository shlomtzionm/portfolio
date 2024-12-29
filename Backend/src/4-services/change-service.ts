import { ChangeModel, IChangeModel } from "../3-models/change-model";
import { ValidationError } from "../3-models/client-errors";

class ChangeService {
  public getAllChang() {
    return ChangeModel.find().exec();
  }

  public addChange(change: IChangeModel) {
    const err = change.validateSync();
    
    if (err) throw new ValidationError(err.message);

    return change.save();
  }

  public deleteChang(changeId: string) {
    return ChangeModel.findByIdAndDelete(changeId).exec();
  }

  public async updateChang(_id: string, change: IChangeModel) {
    const existingChange = await ChangeModel.findById(_id).exec();

    if (!existingChange) {
      throw new ValidationError("We couldn't find this chang");
    }

    return await ChangeModel.findByIdAndUpdate(_id, change, { new: true, runValidators: true }).exec();
  }
}

export const changeService = new ChangeService();
