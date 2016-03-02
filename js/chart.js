//json fake data
var jsondata1 = [{'id':'011', 'name':'1. The Church of England  is the established Christian church in England and the mother church of the worldwide Anglican Communion. The church dates its establishment to the 6th-century Gregorian mission in Kent led by St Augustine. The English church renounced papal authority when Henry VIII broke with Rome to secure an annulment from Catherine of Aragon in the 1530s. The English Reformation accelerated under Edward VI‘s regents before a brief restoration of Catholicism under Queen Mary I and King Philip. The Act of Supremacy of 1558 renewed the breach and the Elizabethan Settlement charted a course whereby the English church was to be both Catholic and Reformed.'},
                 {'id':'012', 'name':'2. The Anglican Church of Canada  (ACC or ACoC) is the Province of the Anglican Communion in Canada. The official French name is l‘Église anglicane du Canada. In 2007, the Anglican Church counted 545,957 members on parish rolls in 1,676 parishes and 2,792 congregations. The 2011 Canadian Census counted 1,631,845 self-identified Anglicans (5 percent of the total Canadian population), making the Anglican Church the third largest Canadian church after the Roman Catholic Church and the United Church of Canada.The Queen of Canada’s Canadian Royal Stylecontinues to include the Style Defender of the Faith (French: Défenseur de la Foi) in describing the Monarch‘s role under the Constitution of Canada, and the Canadian Monarch continues her countenance of two Chapels Royal in the Realm.'}];

var jsondata2 = [{'id':'0121', 'name':'1. The Ecclesiastical Province of Canada was founded in 1860 and is one provinces in the Anglican Church of Canada. Despite its name, the province covers only the former territory of Lower Canada (i.e., southern and eastern Quebec), the Maritimes, and Newfoundland and Labrador (Ontario was split off as a separate province in 1913). There are seven dioceses in the province.'}];

var jsondata3 = [{'id':'01211', 'name':'1. Archbishop, A bishop who presides over several dioceses in a large region.  This position includes some supervisory responsibilities over both dioceses and bishops in that region.'},
                 {'id':'01212', 'name':'2. Bishop, a member of the clergy who has been commissioned to oversee the work of a group of congregations and the priests and deacons who serve them.  That group of congregations is called a “diocese.”  Only a bishop may ordain persons to the order of deacon and priest.  A bishop may also ordain another bishop, but must do so in the company of other bishops.  A bishop must have been previously ordained as a priest.'}];

//var jsondata4 = [{'id':'01121', 'name':'JAVA'},
//                 {'id':'01122', 'name':'C++'},
//                 {'id':'01123', 'name':'PHP'},
//                 {'id':'01124', 'name':'.NET'}];
//
//var jsondata5 = [{'id':'011211', 'name':'JSP'},
//                 {'id':'011212', 'name':'JDBC'},
//                 {'id':'011213', 'name':'STRUCT'},
//                 {'id':'011214', 'name':'SPRING'}];
//
//var jsondata6 = [{'id':'01311', 'name':'SECTION1'},
//                 {'id':'01312', 'name':'SECTION2'}];
//
//var jsondata7 = [{'id':'0112131', 'name':'UPLOAD'},
//                 {'id':'0112132', 'name':'TAG'},
//                 {'id':'0112133', 'name':'XML'},
//                 {'id':'0112134', 'name':'SERVLET'}];
//
//var jsondata8 = [{'id':'0112111', 'name':'C:ID'},
//                 {'id':'0112112', 'name':'C:TAXTFIELD'},
//                 {'id':'0112113', 'name':'C:IMG'},
//                 {'id':'0112114', 'name':'C:FIELD'}];

 

$(function () {
    $.fx.interval = 1;
     
    $('div').on('click' , '.boxs', function (e) {
        e.stopPropagation();//not IE
//      e.cancelBubble;//IE
        //判断，如果存在子节点，则删除，不存在则创建
        var thiss = $(this);
        var number_children = thiss.children().length; 
        if (number_children > 0) {
            // 循环删除节点
            $(thiss.children()).each(function(index, element){
                $(this).slideToggle();//只是隐藏了，并没有删除
            });
        } else {
            // 循环创建节点
            // 根据父节点取子节点,ajax
            if(thiss.attr('id') == 'b01'){
                for(var i = 0; i < jsondata1.length; i++){
                    var box = $('<div id="b'+jsondata1[i].id+'" class="boxs">'+jsondata1[i].name+'</div>');
                    //box.attr('z-index','3');
                    box.slideToggle();
                    thiss.append(box);
                }
            }else if(thiss.attr('id') == 'b012'){
                for(var i = 0; i < jsondata2.length; i++){
                    var box = $('<div id="b'+jsondata2[i].id+'" class="boxs">'+jsondata2[i].name+'</div>');
                    box.slideToggle();
                    thiss.append(box);
                }
            }else if(thiss.attr('id') == 'b0121'){
                for(var i = 0; i < jsondata3.length; i++){
                    var box = $('<div id="b'+jsondata3[i].id+'" class="boxs">'+jsondata3[i].name+'</div>');
                    box.slideToggle();
                    thiss.append(box);
                }
            }
//            else if(thiss.attr('id') == 'b0112'){
//                for(var i = 0; i < jsondata4.length; i++){
//                    var box = $('<div id="b'+jsondata4[i].id+'" class="boxs">'+jsondata4[i].name+'</div>');
//                    box.slideToggle();
//                    thiss.append(box);
//                }
//            }else if(thiss.attr('id') == 'b01121'){
//                for(var i = 0; i < jsondata5.length; i++){
//                    var box = $('<div id="b'+jsondata5[i].id+'" class="boxs">'+jsondata5[i].name+'</div>');
//                    box.slideToggle();
//                    thiss.append(box);
//                }
//            }else if(thiss.attr('id') == 'b0131'){
//                for(var i = 0; i < jsondata6.length; i++){
//                    var box = $('<div id="b'+jsondata6[i].id+'" class="boxs">'+jsondata6[i].name+'</div>');
//                    box.slideToggle();
//                    thiss.append(box);
//                }
//            }else if(thiss.attr('id') == 'b011213'){
//                for(var i = 0; i < jsondata7.length; i++){
//                    var box = $('<div id="b'+jsondata7[i].id+'" class="boxs">'+jsondata7[i].name+'</div>');
//                    box.slideToggle();
//                    thiss.append(box);
//                }
//            }else if(thiss.attr('id') == 'b011211'){
//                for(var i = 0; i < jsondata8.length; i++){
//                    var box = $('<div id="b'+jsondata8[i].id+'" class="boxs">'+jsondata8[i].name+'</div>');
//                    box.slideToggle();
//                    thiss.append(box);
//                }
//            }
        }
    });
});



