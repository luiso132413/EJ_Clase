
module.exports = (sequelize, Sequelize) => {
	const Book = sequelize.define('book', {	
	  id_b: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	  name_book: {
			type: Sequelize.STRING
	  },
	  editorial: {
			type: Sequelize.STRING
  	},
	  author: {
			type: Sequelize.STRING
	  },
	  gender: {
			type: Sequelize.STRING
    },
	  authorcontry: {
			type: Sequelize.STRING
	  },
	  pages: {
			type: Sequelize.INTEGER
	  },
	  yearpublication: {
			type: Sequelize.DATE
	  },
	  price: {
		    type: Sequelize.FLOAT
	  },
    copyrightby: {
      type: Sequelize.STRING,
      defaultValue: 'UMG Antigua'
    }
	});
	
	return Book;
}