var Schema = {
  studyData: {
    id:{type: 'increments', nullable: false, primary: true},
    app_id: {type: 'integer', nullable: false},
    action_id: {type: 'integer', nullable: true},
    user_id: {type: 'string',nullable: false},
    time_taken: {type: 'float', nullable: false},
    study_id: {type: 'integer', nullable: false},
    is_password: {type: 'boolean', nullable: false}
  },
  users: {
    user_id:{type: 'string', nullable: false, unique: true},
    password:{type: 'string', nullable: false},
    fname:{type: 'string', nullable: false},
    lname:{type: 'string', nullable: false},
    other_user1:{type: 'string', nullable: true},
    other_user2:{type: 'string', nullable: true},
    other_user3:{type: 'string', nullable: true},
    other_user4:{type: 'string', nullable: true},
    other_user5:{type: 'string', nullable: true},
    other_user6:{type: 'string', nullable: true}
  }
};
module.exports = Schema;
