require('../models/database')
const Category =require('../models/Category');
const Recipe =require('../models/Recipe');
exports.homepage= async(req, res)=>{

    try{

        const limitNumber= 5;
        const categories = await Category.find({}).limit(limitNumber);


        res.render('index',{title:'Homepage', categories});



    }
    catch(error){
        res.status(500).send({message:error.message || "Error"})


    }

}

exports.exploreCategories= async(req, res)=>{

    try{

        const limitNumber= 20;
        const categories = await Category.find({}).limit(limitNumber);


        res.render('categories',{title:'Categories', categories});



    }
    catch(error){
        res.status(500).send({message:error.message || "Error"})


    }

}


async function insertDymmyRecipeData(){
  try {
    await Recipe.insertMany([
      { 
        "name": "Roasted parsnips",
        "description": `The acidity of the vinegar cuts through the sweetness of the parsnips beautifully here, and the combo of bay and honey adds a real festive feel. For the best results, don't peel them.`,
        "email": "nayeem@gmail.com",
        "ingredients": [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        "category": "American", 
        "image": "southern-friend-chicken.jpg"
      },
      { 
        "name": "Chorizo & pear red cabbage",
        "description": `Recipe Description Goes Here`,
        "email": "recipeemail@raddy.co.uk",
        "ingredients": [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        "category": "Thai", 
        "image": "thai-style-mussels.jpg"
      },
      { 
        "name": "Recipe Name Goes Here",
        "description": `Recipe Description Goes Here`,
        "email": "recipeemail@raddy.co.uk",
        "ingredients": [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        "category": "American", 
        "image": "southern-friend-chicken.jpg"
      },
    ]);
  } catch (error) {
    console.log('err', + error)
  }
}

insertDymmyRecipeData();