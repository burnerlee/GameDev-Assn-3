var Cookies={
    set:function(key,value){
    key=[key+"="+value];
    document.cookie=key.join("; ")
    },
    get:function(key){
        for(var a=[],e=document.cookie.split(/; */),d=0;d<e.length;d++){
        var f=e[d].split("=");
        f[0]==encodeURIComponent(key)&&a.push(decodeURIComponent(f[1].replace(/\+/g,"%20")))
        }
        return a[0];
    },
    
};