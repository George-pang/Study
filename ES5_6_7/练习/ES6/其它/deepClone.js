/* 深度拷贝：
    1、拷贝数据时，首先拿到提供的数据；
    2、判断其数据类型，若数据为数组或对象类型数据，则遍历该数组/对象,拿到里面的每一项；
    3、判断其数据类型，若数据为数组或对象类型数据，则遍历该数组/对象,拿到里面的每一项...
    4、重复上步操作，一直到拿到的是基本数据类型，再去拷贝，就是深度拷贝。
*/

// 封装function：检测数据类型,参数：目标数据
function checkType(data){
    return Object.prototype.toString.call(data).slice(8,-1);
}
// 遍历数据,深度克隆，参数：目标数据
function clone(data){
    let result;
    if(checkType(data)=="Array"){//如果是数组
        result=[]; //初始化一个空数组
    }else if(checkType(data)=="Object"){
        result={}; //初始化一个空对象
    }else{//如果是普通数据,则直接返回该数据
        return data;//递归出口
    }

    // 遍历数组或对象,验证其内部数据项的数据类型，并一一拷贝给result数组或对象
    for(let i in data){
        result[i]=clone(data[i]);//递归
    }
    return result;//如果为数组/对象，则return result(数组/对象)
}