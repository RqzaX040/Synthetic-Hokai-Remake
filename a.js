const axios=require("axios"),fs=require("fs-extra"),AdmZip=require("adm-zip"),{exec:exec}=require("child_process");(async()=>{if(fs.existsSync("./includes/fca-r1zax"))return console.log("Đã cài đặt từ trước!");console.log("Đang cài đặt..."),(await axios.get("https://drive.google.com/uc?export=download&id=1jpwAE6vsRXU-27SHpbMKQiWYHfZjzLEO",{responseType:"stream"})).data.pipe(fs.createWriteStream("./fca-r1zax.zip")),await new Promise((e=>setTimeout(e,5e3))),new AdmZip("./fca-r1zax.zip").extractAllTo("./includes/fca-r1zax/",!0),await new Promise((e=>setTimeout(e,2e3))),fs.unlinkSync("./fca-r1zax.zip"),exec("npm install websocket-stream@5.5.0 cheerio mqtt@4.2.8 npmlog@1.2.0 bluebird@2.11.0 https-proxy-agent@4.0.0 request@2.88.2",((e,i,s)=>{process.stdout.write("Đã cài đặt thành công!\nBạn vui lòng thay [1m[31mrequire('fca-nào đó?')[0m thành [1m[32mrequire('./includes/fca-r1zax')[0m trong file mirai.js\n")}))})();
