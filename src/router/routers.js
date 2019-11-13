import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/Home.vue'
import Home from '@/components/commons/index.vue'
import login from '@/views/login/login.vue'
import Homes from '@/views/Home/Home.vue'
Vue.use(Router);

export default [
    {
        path: '/',
        name: '/',
        component: login,
        hideInMenu:true,
        meta:{
            title:'',
            hideInMenu:true,
        },
    },

    {
        path: 'Home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
            title: '首页',
            hideInMenu: false,
        },
    },
    {
        path: '/DailyInspection',
        name: 'DailyInspection',
        component: Home,
        meta: {
            title: '每日检查',
            hideInMenu: false,
        },
        children:[
            {
                path:'delvNotShelf',
                name:'delvNotShelf',
                component:()=> import("@/views/DailyInspection/delvNotShelf.vue"),
                meta:{
                    title:'收货未上架',
                    hideInMenu:false
                }
            },
            {
                path:'DownAbnormal',
                name:'DownAbnormal',
                component:()=> import("@/views/DailyInspection/DownAbnormal.vue"),
                meta:{
                    title:'出货异常',
                    hideInMenu:false
                }
            },
        ]
    },
    {
        path: '/clientReport',
        name: 'clientReport',
        component: Home,
        meta: {
            title: '客户报表',
            hideInMenu: false,
        },
        children:[
            {
                path:'clientInventory',
                name:'clientInventory',
                component:()=> import("@/views/clientReport/clientInventory.vue"),
                meta:{
                    title:'客户库存',
                    hideInMenu:false
                }
            },
            {
                path:'vp_warning',
                name:'vp_warning',
                component:()=> import("@/views/clientReport/vp_warning.vue"),
                meta:{
                    title:'效期预警',
                    hideInMenu:false
                }
            },
        ]
    },
    {
        path: '/baseData',
        name: 'baseData',
        component: Home,
        meta: {
            title: '基础资料',
            hideInMenu: false,
        },
        children:[
            {
                path:'client',
                name:'client',
                component:()=> import("@/views/baseData/client.vue"),
                meta:{
                    title:'客户',
                    hideInMenu:false
                }
            },
            {
                path:'commodityDetail',
                name:'commodityDetail',
                component:()=> import("@/views/baseData/commodityDetail.vue"),
                meta:{
                    title:'商品明细',
                    hideInMenu:false
                }
            },
            {
                path:'supplier',
                name:'supplier',
                component:()=> import("@/views/baseData/supplier.vue"),
                meta:{
                    title:'供应商',
                    hideInMenu:false
                }
            },
            {
                path:'commodity',
                name:'commodity',
                component:()=> import("@/views/baseData/commodity.vue"),
                meta:{
                    title:'商品',
                    hideInMenu:false
                }
            },
            {
                path:'thirdPartyClient',
                name:'thirdPartyClient',
                component:()=> import("@/views/baseData/thirdPartyClient.vue"),
                meta:{
                    title:'第三方客户',
                    hideInMenu:false
                }
            },
        ]
    },
    {
        path: '/storagePlace',
        name: 'storagePlace',
        component: Home,
        meta: {
            title: '储位管理',
            hideInMenu: false,
        },
        children:[
            {
                path:'warehouseDefinition',
                name:'warehouseDefinition',
                component:()=> import("@/views/storagePlace/warehouseDefinition.vue"),
                meta:{
                    title:'仓库定义',
                    hideInMenu:false
                }
            },
            {
                path:'storageDefinition',
                name:'storageDefinition',
                component:()=> import("@/views/storagePlace/storageDefinition.vue"),
                meta:{
                    title:'储位定义',
                    hideInMenu:false
                }
            },
            {
                path:'availableStorage',
                name:'availableStorage',
                component:()=> import("@/views/storagePlace/availableStorage.vue"),
                meta:{
                    title:'可用储位',
                    hideInMenu:false
                }
            },
            {
                path:'locationMap',
                name:'locationMap',
                component:()=> import("@/views/storagePlace/locationMap"),
                meta:{
                    title:'仓位图',
                    hideInMenu:false
                }
            },
            {
                path:'emptyStorage',
                name:'emptyStorage',
                component:()=> import("@/views/storagePlace/emptyStorage.vue"),
                meta:{
                    title:'空储位',
                    hideInMenu:false
                }
            },
        ],
    },
    {
        path: '/PlatformManagement',
        name: 'PlatformManagement',
        component: Home,
        meta: {
            title: '月台管理',
            hideInMenu: false,
        },
        children:[
            {
                path:'PlatformDefinition',
                name:'PlatformDefinition',
                component:()=> import("@/views/PlatformManagement/PlatformDefinition.vue"),
                meta:{
                    title:'月台定义',
                    hideInMenu:false
                }
            },
            {
                path:'PlatformPlan',
                name:'PlatformPlan',
                component:()=> import("@/views/PlatformManagement/PlatformPlan.vue"),
                meta:{
                    title:'月台计划',
                    hideInMenu:false
                }
            },
            {
                path:'PlatformManagements',
                name:'PlatformManagements',
                component:()=> import("@/views/PlatformManagement/PlatformManagements.vue"),
                meta:{
                    title:'月台管理',
                    hideInMenu:false
                }
            },
        ]
    },
    {
        path: '/IncomingGoodsManagement',
        name: 'IncomingGoodsManagement',
        component: Home,
        meta: {
            title: '进货管理',
            hideInMenu: false,
        },
        children:[
            {
                path:'OtherStorage',
                name:'OtherStorage',
                component:()=> import("@/views/IncomingGoodsManagement/OtherStorage.vue"),
                meta:{
                    title:'其他入库',
                    hideInMenu:false
                }
            },
            {
                path:'reservePurchase',
                name:'reservePurchase',
                component:()=> import("@/views/IncomingGoodsManagement/reservePurchase.vue"),
                meta:{
                    title:'预约进货',
                    hideInMenu:false
                }
            },
            {
                path:'PurchaseDetails',
                name:'PurchaseDetails',
                component:()=> import("@/views/IncomingGoodsManagement/PurchaseDetails.vue"),
                meta:{
                    title:'进货通知明细',
                    hideInMenu:false
                }
            },
            {
                path:'batchDeletion',
                name:'batchDeletion',
                component:()=> import("@/views/IncomingGoodsManagement/batchDeletion.vue"),
                meta:{
                    title:'批量收货',
                    hideInMenu:false
                }
            },
            {
                path:'receiptLevel',
                name:'receiptLevel',
                component:()=> import("@/views/IncomingGoodsManagement/receiptLevel.vue"),
                meta:{
                    title:'收货登记',
                    hideInMenu:false
                }
            },
            {
                path:'notOnTheShelf',
                name:'notOnTheShelf',
                component:()=> import("@/views/IncomingGoodsManagement/notOnTheShelf.vue"),
                meta:{
                    title:'收货未上架库存',
                    hideInMenu:false
                }
            },
            {
                path:'inventoryInquiry',
                name:'inventoryInquiry',
                component:()=> import("@/views/IncomingGoodsManagement/inventoryInquiry.vue"),
                meta:{
                    title:'库存查询',
                    hideInMenu:false
                }
            }
        ]
    },
    {
        path: '/outGoods',
        name: 'outGoods',
        component: Home,
        meta: {
            title: '出货管理',
            hideInMenu: false,
        },
        children:[
            {
                path:'otherOutLibrary',
                name:'otherOutLibrary',
                component:()=> import("@/views/outGoods/otherOutLibrary.vue"),
                meta:{
                    title:'其它出库',
                    hideInMenu:false
                }
            },
            {
                path:'outLibraryNoticeProject',
                name:'outLibraryNoticeProject',
                component:()=> import("@/views/outGoods/outLibraryNoticeProject.vue"),
                meta:{
                    title:'出库通知项目',
                    hideInMenu:false
                }
            },
            {
                path:'outLibraryNotice',
                name:'outLibraryNotice',
                component:()=> import("@/views/outGoods/outLibraryNotice.vue"),
                meta:{
                    title:'出库通知',
                    hideInMenu:false
                }
            },
            {
                path:'outLibraryDetail',
                name:'outLibraryDetail',
                component:()=> import("@/views/outGoods/outLibraryDetail.vue"),
                meta:{
                    title:'出库明细',
                    hideInMenu:false
                }
            },
            {
                path:'abnormalOutLibrary',
                name:'abnormalOutLibrary',
                component:()=> import("@/views/outGoods/abnormalOutLibrary.vue"),
                meta:{
                    title:'异常出库通知明细',
                    hideInMenu:false
                }
            },
            {
                path:'taskConfirm',
                name:'taskConfirm',
                component:()=> import("@/views/outGoods/taskConfirm.vue"),
                meta:{
                    title:'任务确认',
                    hideInMenu:false
                }
            },
            {
                path:'obtained',
                name:'obtained',
                component:()=> import("@/views/outGoods/obtained.vue"),
                meta:{
                    title:'下架',
                    hideInMenu:false
                }
            },
            {
                path:'obtainedTaskDelete',
                name:'obtainedTaskDelete',
                component:()=> import("@/views/outGoods/obtainedTaskDelete.vue"),
                meta:{
                    title:'下架任务删除',
                    hideInMenu:false
                }
            },
            {
                path:'orderPicking',
                name:'orderPicking',
                component:()=> import("@/views/outGoods/orderPicking.vue"),
                meta:{
                    title:'按单拣货',
                    hideInMenu:false
                }
            },
            {
                path:'loadingReview',
                name:'loadingReview',
                component:()=> import("@/views/outGoods/loadingReview.vue"),
                meta:{
                    title:'装车复核',
                    hideInMenu:false
                }
            },
            {
                path:'receiptManage',
                name:'receiptManage',
                component:()=> import("@/views/outGoods/receiptManage.vue"),
                meta:{
                    title:'回单管理',
                    hideInMenu:false
                }
            },
            {
                path:'batchReceipt',
                name:'batchReceipt',
                component:()=> import("@/views/outGoods/batchReceipt.vue"),
                meta:{
                    title:'批量回单',
                    hideInMenu:false
                }
            },
            {
                path:'en_routeInventory',
                name:'en_routeInventory',
                component:()=> import("@/views/outGoods/en_routeInventory.vue"),
                meta:{
                    title:'在途库存',
                    hideInMenu:false
                }
            },
            {
                path:'stockInquire',
                name:'stockInquire',
                component:()=> import("@/views/outGoods/stockInquire.vue"),
                meta:{
                    title:'库存查询',
                    hideInMenu:false
                }
            },
            {
                path:'waveExport',
                name:'waveExport',
                component:()=> import("@/views/outGoods/waveExport.vue"),
                meta:{
                    title:'波次导出',
                    hideInMenu:false
                }
            },
            {
                path:'stockTotalTable',
                name:'stockTotalTable',
                component:()=> import("@/views/outGoods/stockTotalTable.vue"),
                meta:{
                    title:'库存总表',
                    hideInMenu:false
                }
            },
            /*{
                path:'waveInquire',
                name:'waveInquire',
                component:()=> import("@/views/outGoods/waveInquire.vue"),
                meta:{
                    title:'波次查询',
                    hideInMenu:false
                }
            },*/
        ],
    },
    {
        path: '/ReturnsManagement',
        name: 'ReturnsManagement',
        component: Home,
        meta: {
            title: '退货管理',
            hideInMenu: false,
        },
        children:[
            {
                path:'CustomerReturns',
                name:'CustomerReturns',
                component:()=> import("@/views/ReturnsManagement/CustomerReturns.vue"),
                meta:{
                    title:'客户退货',
                    hideInMenu:false
                }
            },
            {
                path:'ReturnReservation',
                name:'ReturnReservation',
                component:()=> import("@/views/ReturnsManagement/ReturnReservation.vue"),
                meta:{
                    title:'退货预约',
                    hideInMenu:false
                }
            },
            {
                path:'ReturnsMaterial',
                name:'ReturnsMaterial',
                component:()=> import("@/views/ReturnsManagement/ReturnsMaterial.vue"),
                meta:{
                    title:'退货验收',
                    hideInMenu:false
                }
            },
            {
                path:'ReturnGoods',
                name:'ReturnGoods',
                component:()=> import("@/views/ReturnsManagement/ReturnGoods.vue"),
                meta:{
                    title:'退货上架',
                    hideInMenu:false
                }
            },
        ]
    },
    {
        path: '/YueKumanagement',
        name: 'YueKumanagement',
        component: Home,
        meta: {
            title: '越库管理',
            hideInMenu: false,
        },
        children:[
            {
                path:'delvNotShelf',
                name:'delvNotShelf',
                component:()=> import("@/views/YueKumanagement/YueKuOrder.vue"),
                meta:{
                    title:'越库订单',
                    hideInMenu:false
                }
            }
        ]
    },
    {
        path: '/InventoryManagement',
        name: 'InventoryManagement',
        component: Home,
        meta: {
            title: '库内管理',
            hideInMenu: false,
        },
        children:[
            {
                path:'StockTransfer',
                name:'StockTransfer',
                component:()=> import("@/views/InventoryManagement/StockTransfer.vue"),
                meta:{
                    title:'库内转移',
                    hideInMenu:false
                }
            },
            {
                path:'GenerateInventoryTransfer',
                name:'GenerateInventoryTransfer',
                component:()=> import("@/views/InventoryManagement/GenerateInventoryTransfer.vue"),
                meta:{
                    title:'生成托盘转移',
                    hideInMenu:false
                }
            }
        ]
    },
    {
        path: '/ManagementWithinTheLibrary',
        name: 'ManagementWithinTheLibrary',
        component: Home,
        meta: {
            title: '盘点管理',
            hideInMenu: false,
        },
        children:[
            {
                path:'Inventory',
                name:'Inventory',
                component:()=> import("@/views/ManagementWithinTheLibrary/Inventory.vue"),
                meta:{
                    title:'盘点',
                    hideInMenu:false
                }
            },
            {
                path:'CountDifference',
                name:'CountDifference',
                component:()=> import("@/views/ManagementWithinTheLibrary/CountDifference.vue"),
                meta:{
                    title:'盘点差异',
                    hideInMenu:false
                }
            },
            {
                path:'ComprehensiveInventory',
                name:'ComprehensiveInventory',
                component:()=> import("@/views/ManagementWithinTheLibrary/ComprehensiveInventory.vue"),
                meta:{
                    title:'综合盘点',
                    hideInMenu:false
                }
            },
            {
                path:'TouchPlate',
                name:'TouchPlate',
                component:()=> import("@/views/ManagementWithinTheLibrary/TouchPlate.vue"),
                meta:{
                    title:'动碰盘',
                    hideInMenu:false
                }
            },
            {
                path:'Compound',
                name:'Compound',
                component:()=> import("@/views/ManagementWithinTheLibrary/Compound.vue"),
                meta:{
                    title:'复盘',
                    hideInMenu:false
                }
            },
            {
                path:'ShelfAdjustment',
                name:'ShelfAdjustment',
                component:()=> import("@/views/ManagementWithinTheLibrary/ShelfAdjustment.vue"),
                meta:{
                    title:'上架调整',
                    hideInMenu:false
                }
            },
            {
                path:'OutOfFrameAdjustment',
                name:'OutOfFrameAdjustment',
                component:()=> import("@/views/ManagementWithinTheLibrary/OutOfFrameAdjustment.vue"),
                meta:{
                    title:'下架调整',
                    hideInMenu:false
                }
            },
            {
                path:'CheckDifferencePost',
                name:'CheckDifferencePost',
                component:()=> import("@/views/ManagementWithinTheLibrary/CheckDifferencePost.vue"),
                meta:{
                    title:'盘点差异过账',
                    hideInMenu:false
                }
            },
            {
                path:'DynamicInventory',
                name:'DynamicInventory',
                component:()=> import("@/views/ManagementWithinTheLibrary/DynamicInventory.vue"),
                meta:{
                    title:'动仓盘点',
                    hideInMenu:false
                }
            },
        ]
    },
    {
        path: '/EarlyWarningManagement',
        name: 'EarlyWarningManagement',
        component: Home,
        meta: {
            title: '预警管理',
            hideInMenu: false,
        },
        children:[
            {
                path:'ValidityWarning',
                name:'ValidityWarning',
                component:()=> import("@/views/EarlyWarningManagement/ValidityWarning.vue"),
                meta:{
                    title:'效期预警',
                    hideInMenu:false
                }
            }
        ]
    },
    {
        path: '/businessReport',
        name: 'businessReport',
        component: Home,
        meta: {
            title: '业务报表',
            hideInMenu: false,
        },
        children:[
            {
                path:'enterOutReport',
                name:'enterOutReport',
                component:()=> import("@/views/businessReport/enterOutReport.vue"),
                meta:{
                    title:'进出库报表',
                    hideInMenu:false
                }
            },
            {
                path:'acceptanceDetail',
                name:'acceptanceDetail',
                component:()=> import("@/views/businessReport/acceptanceDetail.vue"),
                meta:{
                    title:'验收明细',
                    hideInMenu:false
                }
            },
            {
                path:'shelfDetail',
                name:'shelfDetail',
                component:()=> import("@/views/businessReport/shelfDetail.vue"),
                meta:{
                    title:'上架明细',
                    hideInMenu:false
                }
            },
            {
                path:'obtainedDetail',
                name:'obtainedDetail',
                component:()=> import("@/views/businessReport/obtainedDetail.vue"),
                meta:{
                    title:'下架明细',
                    hideInMenu:false
                }
            },
            {
                path:'en_routeInventory',
                name:'en_routeInventory',
                component:()=> import("@/views/businessReport/en_routeInventory.vue"),
                meta:{
                    title:'在途库存',
                    hideInMenu:false
                }
            },
            {
                path:'billingInventory',
                name:'billingInventory',
                component:()=> import("@/views/businessReport/billingInventory.vue"),
                meta:{
                    title:'计费库存查询',
                    hideInMenu:false
                }
            },
            {
                path:'historyInventory',
                name:'historyInventory',
                component:()=> import("@/views/businessReport/historyInventory.vue"),
                meta:{
                    title:'历史库存查询',
                    hideInMenu:false
                }
            },
            {
                path:'delvNotShelf',
                name:'delvNotShelf',
                component:()=> import("@/views/businessReport/delvNotShelf.vue"),
                meta:{
                    title:'收货未上架',
                    hideInMenu:false
                }
            },
            {
                path:'downAbnormal',
                name:'downAbnormal',
                component:()=> import("@/views/businessReport/downAbnormal.vue"),
                meta:{
                    title:'出货异常',
                    hideInMenu:false
                }
            },
            {
                path:'vp_warning',
                name:'vp_warning',
                component:()=> import("@/views/businessReport/vp_warning.vue"),
                meta:{
                    title:'效期预警',
                    hideInMenu:false
                }
            },
            {
                path:'purchaseNotice',
                name:'purchaseNotice',
                component:()=> import("@/views/businessReport/purchaseNotice.vue"),
                meta:{
                    title:'进货通知明细',
                    hideInMenu:false
                }
            },
            {
                path:'abnormalOutLibrary',
                name:'abnormalOutLibrary',
                component:()=> import("@/views/businessReport/abnormalOutLibrary.vue"),
                meta:{
                    title:'异常出库通知明细',
                    hideInMenu:false
                }
            },
            {
                path:'goodsStock',
                name:'goodsStock',
                component:()=> import("@/views/businessReport/goodsStock.vue"),
                meta:{
                    title:'货品库存',
                    hideInMenu:false
                }
            },
            {
                path:'availableStorage',
                name:'availableStorage',
                component:()=> import("@/views/businessReport/availableStorage.vue"),
                meta:{
                    title:'可用储位',
                    hideInMenu:false
                }
            },
            {
                path:'receiptList',
                name:'receiptList',
                component:()=> import("@/views/businessReport/receiptList.vue"),
                meta:{
                    title:'回单列表',
                    hideInMenu:false
                }
            },
            {
                path:'kunetTransfer',
                name:'kunetTransfer',
                component:()=> import("@/views/businessReport/kunetTransfer.vue"),
                meta:{
                    title:'库内转移',
                    hideInMenu:false
                }
            },
            {
                path:'inventoryList',
                name:'inventoryList',
                component:()=> import("@/views/businessReport/inventoryList.vue"),
                meta:{
                    title:'盘点列表',
                    hideInMenu:false
                }
            },
            {
                path:'outsourcingDischarge',
                name:'outsourcingDischarge',
                component:()=> import("@/views/businessReport/outsourcingDischarge.vue"),
                meta:{
                    title:'外包卸货表',
                    hideInMenu:false
                }
            },
            {
                path:'outsourcingLoading',
                name:'outsourcingLoading',
                component:()=> import("@/views/businessReport/outsourcingLoading.vue"),
                meta:{
                    title:'外包装车表',
                    hideInMenu:false
                }
            },

            {
                path: 'Homes',
                name: 'Homes',
                component: Homes,
                hideInMenu:true,
                meta:{
                    title:'',
                    hideInMenu:true,
                },
            },
        ],
    },
    {
        path: '/BasicConfiguration',
        name: 'BasicConfiguration',
        component: Home,
        meta: {
            title: '基础配置',
            hideInMenu: false,
        },
        children:[
            {
                path:'Measurement',
                name:'Measurement',
                component:()=> import("@/views/BasicConfiguration/Measurement.vue"),
                meta:{
                    title:'计量单位',
                    hideInMenu:false
                }
            },
            {
                path:'Product',
                name:'Product',
                component:()=> import("@/views/BasicConfiguration/Product.vue"),
                meta:{
                    title:'产品属性',
                    hideInMenu:false
                }
            }
        ]
    },
    {
        path: '/WarehouseConfiguration',
        name: 'WarehouseConfiguration',
        component: Home,
        meta: {
            title: '仓库配置',
            hideInMenu: false,
        },
        children:[
            {
                path:'Ordertype',
                name:'Ordertype',
                component:()=> import("@/views/WarehouseConfiguration/Ordertype.vue"),
                meta:{
                    title:'订单类型',
                    hideInMenu:false
                }
            },
            {
                path:'LocationType',
                name:'LocationType',
                component:()=> import("@/views/WarehouseConfiguration/LocationType.vue"),
                meta:{
                    title:'库位类型',
                    hideInMenu:false
                }
            },
            {
                path:'TemperatureProperty',
                name:'TemperatureProperty',
                component:()=> import("@/views/WarehouseConfiguration/TemperatureProperty.vue"),
                meta:{
                    title:'温度属性',
                    hideInMenu:false
                }
            }
        ]
    },


];
