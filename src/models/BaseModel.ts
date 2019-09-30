import { omit } from 'lodash';
import { Model } from 'objection';

export class BaseModel extends Model {

  $protected: string[] = [];

  public $formatJson = (json: {}) => {
    return omit(super.$formatJson(json), this.$protected);
  }
}
