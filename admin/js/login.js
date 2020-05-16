$(function () {
    $('.input_sub').on('click', function (e) {
        e.preventDefault()
        var username = $('.input_txt').val()
        var password = $('.input_pass').val()
        if ($.trim(username) == '' || $.trim(password) == '') {
            alert('用户名或密码不能为空，请重新输入')
            return;
        }
        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/v1/admin/user/login',
            data: {
                username: username,
                password: password,
            },
            success: function (res) {
                console.log(res)
                if (res.code == 200) {
                    alert('登录成功..')
                    window.location.href = './index.html'
                } else {
                    alert(res.msg)
                }
            }
        })
    })
})