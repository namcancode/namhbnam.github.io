import { sequelize } from '../databases/databases';
import Sequelize from 'sequelize';

export const List = sequelize.define('list', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  priority: {
    type: Sequelize.TINYINT
  },
  description: {
    type: Sequelize.TEXT
  },
  duedate: {
    type: Sequelize.DATE
  }
}, {
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,
});
