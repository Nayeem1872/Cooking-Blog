require('../models/database')
const Category =require('../models/Category');













exports.homepage= async(req, res)=>{

    try{

        res.render('index',{title:'Homepage'});



    }
    catch(error){
        res.status()


    }






}


// async function insertDymmCategoryData(){

//     try{
//         await Category.insertMany([{
//                     "name": "Thai",
//                     "image": "thai-food.jpg"
//                   },
//                   {
//                     "name": "American",
//                     "image": "american-food.jpg"
//                   }, 
//                   {
//                     "name": "Chinese",
//                     "image": "chinese-food.jpg"
//                   },
//                   {
//                     "name": "Mexican",
//                     "image": "mexican-food.jpg"
//                   }, 
//                   {
//                     "name": "Indian",
//                     "image": "indian-food.jpg"
//                   },
//                   {
//                     "name": "Spanish",
//                     "image": "spanish-food.jpg"
//                   }]);
        

//     }
//     catch(error){
//         console.log('err',+error)

//     }



// }
// insertDymmCategoryData();