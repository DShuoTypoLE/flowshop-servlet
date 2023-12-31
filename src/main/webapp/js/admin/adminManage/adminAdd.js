﻿$(function(){
	var form=$("#myForm").Validform({
		tiptype:2,//validform初始化
	});
	
	form.addRule([
		{
			ele:"#userName",
		    // datatype:"/^[a-zA-Z]{1}[a-zA-Z0-9]{3,7}$/",
		    datatype:"s4-8",
		    ajaxurl:"jsp/admin/AdminManageServlet?action=find",
		    nullmsg:"请输入用户名！",
		    errormsg:"用户名为4-8个字符，请重新输入！"
		},
		{
			ele:"#passWord",
			datatype:"s4-8",
			nullmsg:"请输入密码",
			errormsg:"密码为4~8位字符，请重新输入！"
		},
		{
			ele:"#c_passWord",
			datatype:"*",
			recheck:"passWord",
			mullmsg:"请输入确认密码！",
			errormsg:"两次输入的密码不一致，请重新输入！"
		},
		{
			ele:"#name",
			datatype:"s2-8",
			mullmsg:"请输入姓名！",
			errormsg:"姓名为2~8位字符，请重新输入！"
		}
	]);
	
});


