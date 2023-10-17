let name={
    name: 'pradip',
    roll:33,
    greet:function(){
        let lastname='bhatt';
        console.log("The name of the person is "+this.name+"\t"+lastname);
    }
};

name.greet();