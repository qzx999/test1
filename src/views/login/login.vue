<template>
    <div style="background-color: #93defe;height:900px">
        <div>
            <img src="../../assets/img/logo.png"  width="20%"/>
        </div>
        <div style="float:left;margin-left: 20%">
            <img src="../../assets/img/login-img.png" height="440" width="100%"/></div>
        <br/>
        <div style="border: solid 1px #e5e5e5;width: 30%; float:right; margin-right:100px; height: 500px;padding-top: 70px;background-color: #fff;border-radius: 10px">
            <Form :label-width="100" :model="user">
                <Row>
                    <Col span="16"  push="4">
                        <div style="background-color: #0b8dd9;margin-bottom: 50px;text-align: center; border-radius: 10px" >
                            <span style="font-size: 30px;color: #fff" >用户登录</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span="16"  push="3">
                        <FormItem label="账号:" prop="" >
                            <Input  size="large" type="text" v-model="user.userName" placeholder="请输入账号" >

                            </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="16"  push="3">
                        <FormItem label="密码:" prop="" >
                            <Input  size="large" type="password" v-model="user.passWord" placeholder="请输入密码" />
                        </FormItem>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col  push="7">
                    <CheckboxGroup>
                        <Checkbox label="twitter">
                            <span>记住密码</span>
                        </Checkbox>
                    </CheckboxGroup>
                </Col>
            </Row>
            <Row style="margin-top:8%">
                <Col  push="5">
                    <Button type="info" style="width:60%;font-size: 18px" @click="login" @keyup.enter="login">
                        登陆
                    </Button>
                   <!-- <Button  type="primary" @click="handleAddBook" @keyup.enter="handleAddBook">录入</Button>-->
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                user:{},
                users:{usersNames:"admin",userPasswords:'admin'},
                totalRoutes:[]
            }
        },
        methods:{
            login(){
                console.log(this.user)
                if(this.user.userName==this.users.usersNames && this.user.passWord==this.users.userPasswords){
                    this.$Message.success('登录成功');
                    location.href='businessReport/Homes'
                }
            },
            /*deleteDiv(ev){
               alert(ev.keyCode)

            },*/
            keyupEnter(){
                document.onkeyup = e =>{
                    // alert(e.keyCode)
                    if (e.keyCode === 13) {
                        console.log('enter')
                        this.login()
                    }
                }
            },
        },
        created() {
            this.totalRoutes = this.$router.options.routes;
            this.keyupEnter()
        }
    }
</script>
<style>

</style>