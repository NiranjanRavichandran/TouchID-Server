var Schema = {
  studyData: {
    id:{type: 'increments', nullable: false, primary: true},
    app_id: {type: 'integer', nullable: false},
    action_id: {type: 'integer', nullable: true},
    user_id: {type: 'String',nullable: false},
    time_taken: {type: 'float', nullable: false},
    study_id: {type: 'integer', nullable: false},
    is_password: {type: 'boolean', nullable: false}
  },
  users: {
    user_id:{type: 'String', nullable: false, unique: true},
    password:{type: 'String', nullable: false},
    fname:{type: 'String', nullable: false},
    lname:{type: 'String', nullable: false},
    other_user1:{type: 'String', nullable: true},
    other_user2:{type: 'String', nullable: true},
    other_user3:{type: 'String', nullable: true},
    other_user4:{type: 'String', nullable: true},
    other_user5:{type: 'String', nullable: true},
    other_user6:{type: 'String', nullable: true}
  }
};
module.exports = Schema;
