
const router = require('express').Router();
const Jikan = require('jikan-node');
const mal = new Jikan();

router.post('/formData',async (req,res)=>{

    let genre=req.body.genre;
    let ep=req.body.ep;
    let date=req.body.date;
    let status=req.body.status;
    let result=await mal.search("anime","",{genre:genre,start_date:date,status:status,order_by:"members"});
    let retResults=result.results;
    retResults.sort((a, b) => (a.score > b.score) ? -1 : 1);
    if(ep&&ep!=0){
        let epResults=[];
        for(var i=0;i<retResults.length;i++){
            if(retResults[i].episodes==ep){
                epResults.push(retResults[i]);
            }
        }
        if(epResults.length!=0){
            return res.status(200).send(epResults);
        }
    }
    return res.status(200).send(retResults);
    }
)
    
module.exports=router