$(function () {
    //给form表单注册submit事件
    $('.login_form').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/v1/admin/user/login',
            data: $(this).serialize(),
            beforeSend: function () {
                var flag = false
                $('.login_form input[name]').each(function (index, ele) {
                    if (!$.trim($(ele).val())) {
                        flag = true
                    }
                })
                if (flag) {
                    alert('输入的用户名或密码不能为空')
                    return false
                }
            },
            success: function (res) {
                if (res.code == 200) {
                    alert('登录成功')
                    window.location.href = './index.html'
                } else {
                    alert(res.msg)
                }
            }
        })
    })
})