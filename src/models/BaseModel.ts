import { omit } from 'lodash';
import { Model } from 'objection';

export class BaseModel extends Model {

  $protected: string[] = [];

  public toJSON = () => {
    return omit(super.toJSON(), this.$protected);
  }
}
