function CollectDough(name,callback){
    console.log("Collecting dough for",name, "Pizza");
    callback(name,BakePizza)
}

function AddSauce(name,callback){
    console.log("Adding",name,"Sauce")
    callback()
}

function BakePizza(){
    console.log("Baking your Pizza")
}

CollectDough("Margherita",AddSauce)