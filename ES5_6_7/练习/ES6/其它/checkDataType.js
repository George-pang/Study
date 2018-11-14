
    // 封装function：检测数据类型
    /*
        参数1：目标数据
        返回值：字符串类型数据类型 
     */
    function checkType(target){
        return Object.prototype.toString.call(target).slice(8,-1);
    } 