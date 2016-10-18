var Schema = {
  studyData: {
    id:{type: 'increments', nullable: false, primary: true},
    app_id: {type: 'integer', nullable: false},
    action_id: {type: 'integer', nullable: true},
    user_id: {type: 'integer',nullable: false},
    time_taken: {type: 'float', nullable: false},
    study_id: {type: 'integer', nullable: false},
    is_password: {type: 'boolean', nullable: false}
  }
};
module.exports = Schema;
