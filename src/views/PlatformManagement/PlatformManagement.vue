<template>
    <div>
        <!--<Tabs type="card"  @on-tab-remove="handleTabRemove">
            <TabPane label="月台定义" ref="ss" v-if="tab0" >
                <platform-definition></platform-definition>
            </TabPane>
            <TabPane label="月台计划" v-if="tab1" >
                <PlatformPlan></PlatformPlan>
            </TabPane>
            <TabPane label="月台管理" v-if="tab2" >
                <PlatformManagements></PlatformManagements>
            </TabPane>
        </Tabs>-->
    </div>
</template>
<script>
    export default {
        data(){
            return{
               /* tab0: false,
                tab1: false,
                tab2: false,
                totalRoutes:[],
                PlatformPlan:'',
                PlatformManagements:'',
                PlatformDefinition:'',
                dizhi:''*/
            }
        },
        components:{
           /* PlatformDefinition:()=>import('@/views/PlatformManagement/PlatformDefinition.vue'),
            PlatformPlan:()=>import('@/views/PlatformManagement/PlatformPlan.vue'),
            PlatformManagements:()=>import('@/views/PlatformManagement/PlatformManagements.vue')*/
        },
        methods:{
           /* handleTabRemove (name) {
                this['tab' + name] = false;
            }*/
        },
        mounted() {
            this.totalRoutes = this.$router.options.routes;
           /* for (let i=0;i<this.totalRoutes.length;i++) {
                alert(this.totalRoutes[i].children)
                if(this.totalRoutes[i].children!=undefined){
                    alert(this.totalRoutes[i].children.length)
                     for (let j=0;j<this.totalRoutes[i].children.length;j++) {
                         alert(this.totalRoutes[i].children[j].name)
                        if(this.totalRoutes[i].children[j].name=="PlatformManagement"){
                           this.PlatformManagements=this.totalRoutes[i].children[j].name
                        }else if(this.totalRoutes[i].children[j].name=="PlatformPlan"){
                            this.PlatformPlan=this.totalRoutes[i].children[j].name
                        }else if(this.totalRoutes[i].children[j].name=="PlatformDefinition"){
                            this.PlatformDefinition=this.totalRoutes[i].children[j].name
                        }
                     }
                }*/
               /* alert(this.totalRoutes[i].children.length)*/
               /* for (let j=0;i<this.totalRoutes.children.length;j++) {
                    if(this.totalRoutes[i].children[j].name=='PlatformDefinition'){
                        alert("sss")
                   }
                }*/
           /* }
            console.log(this.totalRoutes)*/
        },
        watch:{
           /* $route(to,from){
                if(to.name=='PlatformPlan'){
                    this.tab1=true
                    this.PlatformPlan==to.name
                }else if(to.name=='PlatformManagements'){
                    this.tab2=true
                    this.PlatformManagements==to.name
                }else if(to.name=='PlatformDefinition'){
                    this.tab0=true
                    this.PlatformDefinition==to.name
                }
                console.log(to.name);
            }*/
        },
       /* created() {
            alert(this.$route.path)
          console.log(this.$route.path)
        }*/
    }
</script>