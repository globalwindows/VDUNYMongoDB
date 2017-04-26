Create server baseball 

use hof

----------------Create Inial Database
db.hof.insert({"ID":1,"LastName" : "Mantle", "FirstName" : "Mickey","Position" : "Outfield","HomeRuns" : 500})

db.hof.find().pretty()


db.hof.insert([
    {"ID":2,"LastName" : "Gibson", "FirstName" : "Bob","Position" : "Pitcher","StrikeOuts" : 2950},
    {"ID":3,"LastName" : "Gehrig", "FirstName" : "Lou","Position" : "First Base","Team":"Yankees","Hits" : 2721,"WorldSeriesWins" : 6},
    {"ID":4,"LastName" : "Rose", "FirstName" : "Pete","Position":"Outfield","Hits" : 4256},
    {"ID":5,"LastName" : "Henderson", "FirstName" : "Rickey","Position" : "Outfield","StolenBases" : 1406},
    {"ID":6,"LastName" : "Ryan ", "FirstName" : "Nolan", "Position" : "Pitcher", "NoHitters" : 7,"StrikeOuts":5714,"Team":"Yankees"}   
])

db.hof.find().pretty()

db.hof.update( {"ID" :1 },{$set : { "Team":"Yankees" }})

db.hof.find({},{ "LastName": 1, "FirstName": 1,"Team":1, _id:0 })

db.hof.find({},{ "LastName": 1, "FirstName": 1,"Team":1, _id:0 }).sort({"LastName":-1})

db.hof.find({ "Team": { $exists: true, $ne: "" } })

db.hof.find({  "Team": { "$eq" :"Yankees"} }, {"LastName":1,"FirstName":1, "_id":0})

db.hof.update({"ID" :1 },{$set: {"HomeRuns" : 536}})

db.hof.insert(
    {"ID":7,"LastName" : "Jackson", "FirstName" : "Reggie","Position" : "Outfield","HomeRuns" : 563, "Team":"Yankees", "WorldSeriesWins" : 5}
)

db.hof.remove( { LastName: "Rose" })

db.hof.update( {"ID" :3 },{$set : { "Team":"Yankees" }})

db.hof.update( { "LastName": "Gibson"},{$set : { "Team":"Cardinals" }})

------------------ Formated code  for $and

db.hof.find( 
{ 
   $and:
   [
      { "Position":"Outfield"} , 
      { "HomeRuns":{$gt :500}} 
    ] 
 },
   
   {
      "LastName":1,
      "HomeRuns":1,
      "Position":1,
      "StolenBases":1 ,
      "Team":1,
      _id:0 }
)

-----------------  Formated code  for $or

db.hof.find( 
 {
   "$or":
   [ 
     {"LastName": "Mantle" },
     {"LastName": "Gibson"}
   ] 
 }, 
 {
     "LastName":1,
     "FirstName":1,
     "Position":1,
     "StolenBases":1,
     "Team":1,_id:0 
  } 
);

--------------------------------
db.hof.find( { "$or": [ {  "LastName": "Mantle" }, {"LastName": "Gibson"}] },  {"LastName":1,"Position":1,"StolenBases":1 ,"Team":1,_id:0 } );

db.hof.find({"Team":"Yankees" },  {"LastName":1,"Position":1,"StolenBases":1 ,"Team":1,_id:0 } )

db.hof.find( { "$or": [ {  "LastName": "Mantle" }, {"LastName": "Gibson"}] },  {"LastName":1,"Position":1,"StolenBases":1 ,"Team":1,_id:0 } );

db.hof.find( { $and: [ { "Position":"Outfield"} , { "HomeRuns":{$gt :500}}  ] })

db.hof.find().sort({"ID":1})
db.hof.find().sort({"ID":-1}) //descending

db.hof.update( {"LastName" :"Henderson"},{$set : { "Team":"Athletics" }})

db.hof.update({$unset:

db.hof.remove({})

db.hof.deleteMany()


db.hof.update
(
  {
     "ID":4
  },
  {
      $set:
        {
           "Status" : "Instated"
        }
   }
)

db.hof.insert([
    {"ID":1,"LastName" : "Mantle", "FirstName" : "Mickey","Position" : "Outfield","HomeRuns" : 500},
    {"ID":2,"LastName" : "Gibson", "FirstName" : "Bob","Position" : "Pitcher","StrikeOuts" : 2950},
    {"ID":3,"LastName" : "Jackson", "FirstName" : "Reggie","Position" : "Outfield","HomeRuns" : 563,"WorldSeriesWins" : 5},
    {"ID":4,"LastName" : "Rose", "FirstName" : "Pete","Position":"Outfield","Hits" : 4256},
    {"ID":5,"LastName" : "Henderson", "FirstName" : "Rickey","Position" : "Outfield","StolenBases" : 1406},
    {"ID":6,"LastName" : "Ryan ", "FirstName" : "Nolan", "Position" : "Pitcher", "NoHitters" : 7,"StrikeOuts":5714,"Team":"Yankees"}   
])


db.hof.find({},{ "LastName": 1, "FirstName": 1,_id:0 }).sort({"LastName":-1})

db.hof.update( {"ID" :1 }, { "Team":"Yankees" })
db.hof.update( {"ID" :1 },{$set : { "Team":"Yankees" }})
db.hof.update({"ID" :1 },{"HomeRuns" : 536})
db.hof.update({"ID" :1 },{$set: {"HomeRuns" : 536}})

db.hof.findOne({ "LastName" : "Mays" })

db.hof.update( {"ID" :1 },{$set : { "Bats":"Right" }})

db.hof.findOne({ "ID" :1 })

db.hof.update( { ID: 1 },{ $unset: { Bats: "" }})

db.hof.remove( { ID: 1 })
                                         


db.hof.insert([{"LastName" : "Mays", "FirstName" : "Willie","Position" : "Outfield","HomeRuns" : 621}])

db.hof.insert([{"_id":1,"LastName" : "Mays", "FirstName" : "Willie","Position" : "Outfield","HomeRuns" : 621}])

db.hof.findOne({ "_id" :1 })

db.hof.update( {"_id" :1 },{$set : { "Bats":"Right" }})

db.hof.findOne({ "_id" :1 })

db.hof.update( { _id: 1 },{ $unset: { Bats: "" }})

db.hof.remove( { _id: 1 })


db.hof.findOne({ "_id" :1 })

db.hof.update( {"_id" :1 },{$set : { "Bats":"Right" }})

db.hof.findOne({ "_id" :1 })

db.hof.update( { _id: 1 },{ $unset: { Bats: "" }})

db.HOF.find( { "HomeRuns" : {$gt: 600} })  
 
db.hof.aggregate([{$group:{ _id: "$Position" ,MyResult : { $sum:1}}}])

db.hof.aggregate([{	$group:{ _id: "$Position" ,Positions : { $sum:"$Hits"}}}])

db.hof.aggregate([{	$group:{ _id: "" ,HomeRuns : { $sum:"$HomeRuns"}}}])
