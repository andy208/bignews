$(function () {
    //给form表单注册submit事件
    $('.login_form').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            type: 'post',
            // url: 'http://localhost:8080/api/v1/admin/user/login',
            url: BigNew.user_login,
            data: $(this).serialize(),
            beforeSend: function () {
                var flag = false
                $('.login_form input[name]').each(function (index, ele) {
                    if (!$.trim($(ele).val())) {
                        flag = true
                    }
                })
                if (flag) {
                    $('.modal').modal('show')
                    $('.modal-body p').text('输入的用户名或密码不能为空')
                    return false
                }
            },
            success: function (res) {
                $('.modal').modal('show')
                $('.modal-body p').text(res.msg)
                if (res.code == 200) {
                    //单击确定按钮，隐藏模态框之后再跳转
                    $('.modal').on('hidden.bs.modal', function (e) {
                        //将服务器端响应回来的token字符串存到本地存储中
                        localStorage.setItem('token', res.token)
                        window.location.href = './index.html'
                    })
                }
            }
        })
    })
    //实现模态框的显示与隐藏

})