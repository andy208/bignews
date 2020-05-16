$(function () {
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/user/info',
        headers: {
            'Authorization': localStorage.getItem('token')
        },
        success: function (res) {
            // console.log(res)
            if (res.code == 200) {
                $('.user_info span i').text(res.data.nickname)
                $('.user_info img').attr('src', res.data.userPic)
                $('.user_center_link img').attr('src', res.data.userPic)
            }
        }
    })

    // var xhr = new XMLHttpRequest()
    // xhr.open('get', 'http://localhost:8080/api/v1/admin/user/info')
    // //要使用请求头将服务器端响应回来的token字符串，再次发送回服务器
    // xhr.setRequestHeader('Authorization', 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYWRtaW4iLCJleHAiOjIxOTQ0MTIwMDEsImlhdCI6MTU4OTYxMjAwMX0.VIyhs0c8X8h_TJhy06W0V5IGfdRdV7wTacjd0_wfjeh9jQI4Ga59PmlinVdvvaQcmJmiE-Cras2fHpOAz3_JiLpy8dMTjogthq4IE_mJZBG1A_KvpjDUvc0jD5XftZzQu3F2TAmaeurtJ4PbhS2F6i-sG7eVIcKPr5fsYTen7MY')
    // xhr.send(null)
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4 && xhr.status == 200) {
    //         console.log(xhr.responseText)
    //     }
    // }
})

// { "code": 200, "msg": "登录成功", "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYWRtaW4iLCJleHAiOjIxOTQ0MTIwMDEsImlhdCI6MTU4OTYxMjAwMX0.VIyhs0c8X8h_TJhy06W0V5IGfdRdV7wTacjd0_wfjeh9jQI4Ga59PmlinVdvvaQcmJmiE-Cras2fHpOAz3_JiLpy8dMTjogthq4IE_mJZBG1A_KvpjDUvc0jD5XftZzQu3F2TAmaeurtJ4PbhS2F6i-sG7eVIcKPr5fsYTen7MY" }