
function date(D){
result={'Mon':0,'Tue':0,'Wed':0,'Thu':0,'Fri':0,'Sat':0,'Sun':0}


for( date of Object.keys(D)){
    var dt=new Date(date)
    //  console.log(dt.getDay())
    
     if(dt.getDay()==1){
    
        result.Mon+=D[date]
        
     }
     else if(dt.getDay()==2){
        
        result.Tue+=D[date]
       
     }
    else if(dt.getDay()==3){
        
           
           result.Wed+=D[date]
        
       
    }
    else if(dt.getDay()==4){
       
       result.Thu+=D[date]
       
    

    }
    else if(dt.getDay()==5){
       
       result.Fri+=D[date]
    }
    else if(dt.getDay()==6){
       
       result.Sat+=D[date]
       
    }
    else if(dt.getDay()==0){
       
       result.Sun+=D[date]

      
       
    }

   
     
}
console.log(result);
}

date(
    D={'2020-01-01':4,'2020-01-02':4,'2020-01-03':6,'2020-01-04':8,
    '2020-01-05':2,'2020-01-06':-6,'2020-01-07':2,'2020-01-01':-2})

