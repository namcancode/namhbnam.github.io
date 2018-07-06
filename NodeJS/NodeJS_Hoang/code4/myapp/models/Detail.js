import { sequelize } from '../databases/database';
import Sequelize from 'sequelize';

export const Detail = sequelize.define('detail', {
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
