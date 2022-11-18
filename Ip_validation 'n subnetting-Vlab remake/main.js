let cls_btn = document.getElementById("cls-btn");
let val_btn = document.getElementById("val-btn");
let cls_selected = false;

let ip_cls = 0,net_id, cur_ip_cls;
let rand_id;

let pc_ip, pc_ip_nodes, pc_ip_inp;
let pc_sub, pc_sub_nodes, pc_sub_inp;

let valid_pc_lst, pc_ip_lst,pc_sub_lst;

cls_btn.onclick = function(){
    
    rand_id = []

    ip_cls = document.getElementById("ip_cls");
    ip_cls = ip_cls.options[ip_cls.options.selectedIndex].value;
    
    net_id = document.getElementById("net-id");

    for(let i=0; i<ip_cls; i++) rand_id.push(Math.floor(Math.random() * (255 - 1) + 1));
    
    let len = rand_id.length;

    for(let i=0; i<(4-len); i++) rand_id.push(0);

    net_id.innerHTML = `${rand_id.join(".")}`

    cls_selected = true;
}

val_btn.onclick = function(){
    
    cur_ip_cls = document.getElementById("ip_cls");
    cur_ip_cls = cur_ip_cls.options[cur_ip_cls.options.selectedIndex].value;

    if(cur_ip_cls==ip_cls){

        valid_pc_lst = [];

        pc_ip = document.getElementsByClassName("pc-ip");
        pc_sub = document.getElementsByClassName("pc-sub");


        for(let i=0;i<pc_ip.length;i++){
            pc_ip_nodes = pc_ip[i].childNodes;
            pc_sub_nodes = pc_sub[i].childNodes;

            let ind = 0;
            let valid = true, empty = false;

            for(let j=0;j<pc_ip_nodes.length;j++){
            
                if(j%2!=0){
                    
                    pc_ip_inp =  pc_ip_nodes[j].value;
                    pc_sub_inp = pc_sub_nodes[j].value;
                    
                    if(pc_ip_inp!="" && pc_sub_inp!=""){

                        if(ind<ip_cls){
                            if(rand_id[ind]!=pc_ip_inp || pc_sub_inp!=255){
                                valid = false;
                                break;
                            }
                        }

                        else{
                            if((!(pc_ip_inp>0 && pc_ip_inp<=255)) || (pc_sub_inp!=0)){
                                valid = false;
                                break;
                            }
                        }

                        ind+=1;
                    }

                    else{
                        alert("IP/Subnet mask field incomplete!!");
                        empty = true;
                        break;
                    }  
                      
                }
                
            }

            if(valid){
                valid_pc_lst.push(`${i+1}`);  
            }
            else{
                valid_pc_lst.push(`0`);
            }

            if(empty) break;

        }

        
        console.log(valid_pc_lst);

        let a = 1;
        let pc_ob; 

        valid_pc_lst.forEach(
            (pc)=>{
                pc_ob = document.getElementById(`pc-${a}`);
                if(Number(pc)==0){
                    pc_ob.innerHTML = `PC-${a} not in Network`;
                    pc_ob.style.backgroundColor = "#ee6055";
                }

                else{
                    pc_ob.innerHTML = `PC-${a} in Network`;
                    pc_ob.style.backgroundColor = "#70e000";
                }

                a++;
            }
        );
    }
    
    else{
        window.alert("Kindly confirm the IP-class!!");
    }
}
