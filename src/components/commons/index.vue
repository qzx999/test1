<template>
    <div class="index">
        <Layout>
            <Header style="background-color: #605ca8">
                <Menu mode="horizontal" theme="dark" active-name="1" style="background-color: #605ca8">
                    <div class="layout-logo" style="background-color: #605ca8">
                       <a href="/businessReport/Homes"><img src="../../assets/img/logo.png"  style="margin-top: -20px" width="180px"/>   </a>
                    </div>
                    <div class="layout-nav" style="margin-right:-170px">
                        <MenuItem name="2">
                            <Badge :count="xcount" type="warning">
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                            <Poptip>
                                <Icon type="ios-mail-outline" size="26"/>
                                <div slot="title" style="color: black"><i>消息<span style="color: red">&nbsp;{{ xcount }}</span>条</i></div>
                                <div class="api"  slot="content" style="color: black">
                                    暂无消息
                                </div>
                            </Poptip>
                        </MenuItem>
                        <MenuItem name="3">
                            <Badge :count="gcount" type="warning">
                                <a href="#" class="demo-badge"></a>
                            </Badge>
                            <Poptip>
                                <Icon type="ios-notifications-outline" size="26"></Icon>
                                <div slot="title" style="color: black"><i>公告<span style="color: red">&nbsp;{{ gcount }}</span>条</i></div>
                                <div class="api"  slot="content" style="color: black">
                                    暂无公告
                                </div>
                            </Poptip>
                        </MenuItem>
                        <MenuItem name="4">
                            <Poptip >
                                <Avatar icon="ios-person" size="large" />
                                <div id="system" class="api" slot="content" align="center" style="color: black">
                                    <p>修改密码</p>
                                    <p>个人信息</p>
                                    <p>系统消息</p>
                                    <p>系统风格</p>
                                    <hr/>
                                    <DropdownItem style="color: azure">
                                        <Button type="error" style="width: 100%;height: 30px">
                                            <Icon type="md-radio-button-on" />注销
                                        </Button>
                                    </DropdownItem>
                                </div>
                            </Poptip>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider class="sider">
                    <Scroll height="640">
                        <Menu theme="light" width="auto">
                            <Submenu v-for="(item,index) in computed_totalRoutes" :name="index" >
                                <template slot="title">
                                    <!--<Icon type="ios-navigate"></Icon>-->
                                    {{item.meta.title}}
                                </template>
                                <MenuItem v-for="child in item.children" :to="item.path +'/'+ child.path"  :name="child.name">
                                    {{child.meta.title}}
                                </MenuItem>
                            </Submenu>
                        </Menu>
                    </Scroll>

                </Sider>
                <Layout>
                    <Content class="content">
                        <router-view></router-view>
                    </Content>
                </Layout>

            </Layout>
        </Layout>
        <!--<Layout>
            <Footer class="layout-footer-center">Deer WMS 智慧仓储管理系统 | 技术支持：QQ-1466181575 手机-13685133739</Footer>
        </Layout>-->
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return{
                totalRoutes:[],
                gcount:3,
                xcount:1
            }
        },
        computed:{
            computed_totalRoutes() {
                let arr = [],childArr =  [];
                if(this.totalRoutes && this.totalRoutes.length > 0) {
                    this.totalRoutes.forEach(item =>{
                        if(item.meta.hideInMenu == false) {
                            if(item.children && item.children.length > 0) {
                                childArr = [];
                                for(let i = 0; i< item.children.length; i++) {
                                    if(item.children[i] && item.children[i].meta && item.children[i].meta.hideInMenu == false) {
                                        childArr.push(item.children[i]);
                                    }
                                }
                                item.children = childArr;
                                arr.push(item);
                            }
                        }
                    });
                }
                //最后将过滤后的路由重新返回给页面
                return arr;
            }
        },
        mounted() {
            this.totalRoutes = this.$router.options.routes;
            return this.totalRoutes;
        }
    }
</script>

<style scoped>
    #system p{
        padding: 8px;
    }
    #system p:hover{
        background-color: #f6f6f9;
    }
    .sider{
        background-color: #fff;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
        color: #fff;
        background-color: #515A6E;
        height: 50px;
    }
    .content{
        height: 500px;
        padding: 0px 16px 16px;
    }
</style>
