import Mock from 'mockjs'//引入mock
import * as delvNotShelfMock from './response/DailyInspection/delvNotShelfMock.js';
import * as DownAbnormalMock from './response/DailyInspection/DownAbnormalMock.js';
import * as clientInventoryMock from './response/clientReport/clientInventoryMock.js';
import * as YueKuManagement from './YueKuManagement/YueKuOrder.js';//越库管理
import * as ReturnsManagement from './response/ReturnsManagement/CustomerReturns.js';//退货管理拦截
import * as ReturnGoods from './response/ReturnsManagement/ReturnGoods.js';//退货上架
import * as vp_warningMock from './response/clientReport/vp_warningMock.js';//效期预警
import * as clientMock from './response/baseData/clientMock.js';//客户
import * as StockTransfer from './InventoryManagement/StockTransfer.js' //库内转移
import * as ReturnsMaterial from './response/ReturnsManagement/ReturnsMaterial.js';//退货验收
import * as ReturnReservation from './response/ReturnsManagement/ReturnReservation.js';//退货登记
import * as commodityDetailMock from './response/baseData/commodityDetailMock.js';//客户
import * as GenerateInventoryTransfer from './InventoryManagement/GenerateInventoryTransfer.js' //生产托盘转移
import * as supplierMock from './response/baseData/supplierMock.js';//供应商
import * as en_routeInventory from './response/businessReport/en_routeInventory.js';//基础配置
import * as downAbnormal from './response/businessReport/downAbnormal.js';//出货异常

import * as Product from './response/BasicConfiguration/Product.js';//产品属性
import * as shelfDetail from './response/businessReport/shelfDetail.js';//上架明细
import * as obtainedDetail from './response/businessReport/obtainedDetail.js';//下架明细
import * as historyInventory from './response/businessReport/historyInventory.js';//历史库存查询
import * as billingInventory from './response/businessReport/billingInventory.js';//基础配置
import * as Measurement from './response/BasicConfiguration/Measurement.js';//基础配置历
import * as delvNotShelf from './response/businessReport/delvNotShelf.js';//收货未上架
import * as vp_warning from './response/businessReport/vp_warning.js';//效期预警




import * as Inventory from './ManagementWithinTheLibrary/Inventory.js' //盘点
import * as CountDifference from './ManagementWithinTheLibrary/CountDifference.js' //盘点差异
import * as TouchPlate from './ManagementWithinTheLibrary/TouchPlate.js' //动碰盘
import * as Compound from './ManagementWithinTheLibrary/Compound.js' //复盘
import * as ComprehensiveInventory from './ManagementWithinTheLibrary/ComprehensiveInventory.js' //综合盘点
import * as ShelfAdjustment from './ManagementWithinTheLibrary/ShelfAdjustment.js' //上架调整
import * as OutOfFrameAdjustment from './ManagementWithinTheLibrary/OutOfFrameAdjustment.js' //下架调整
import * as CheckDifferencePost from './ManagementWithinTheLibrary/CheckDifferencePost.js' //盘点差异过账
import * as DynamicInventory from './ManagementWithinTheLibrary/DynamicInventory.js'    //动仓盘点
import * as warehouseDefinitionMock from './response/storagePlace/warehouseDefinitionMock.js';//仓库定义
import * as storageDefinitionMock from './response/storagePlace/storageDefinitionMock.js';//储位定义
import * as availableStorageMock from './response/storagePlace/availableStorageMock.js';//可用储位
import * as Ordertype from './response/WarehouseConfiguration/Ordertype.js';//订单类型
import * as ValidityWarning from './EarlyWarningManagement/ValidityWarning.js' //效期预警
import * as emptyStorageMock from './response/storagePlace/emptyStorageMock.js';//空储位
import * as LocationType from './response/LocationType/LocationTypeAdd.js';//库位类型
import * as TemperatureProperty from './response/TemperatureProperty/TemperatureProperty1.js';//温度类型
import * as otherOutLibraryMock from './response/outGoods/otherOutLibraryMock.js';//其它库存
import * as outLibraryNoticeProjectMock from './response/outGoods/outLibraryNoticeProjectMock.js';//出库通知项目
import * as outLibraryNoticeMock from './response/outGoods/outLibraryNoticeMock.js';//出货通知
import * as purchaseNotice from './response/businessReport/purchaseNotice.js' //进货通知明细
import * as abnormalOutLibraryMock from './response/outGoods/abnormalOutLibraryMock.js';//出货异常
import * as taskConfirmMock from './response/outGoods/taskConfirmMock.js';//任务确认
import * as commodityMock from './response/baseData/commodityMock.js';//商品

import * as obtainedMock from './response/outGoods/obtainedMock.js';//下架
import * as obtainedTaskDeleteMock from './response/outGoods/obtainedTaskDeleteMock.js';//下架任务删除
import * as goodsStock from './response/businessReport/goodsStock.js' //货品库存
import * as abnormalOutLibrary from './response/businessReport/abnormalOutLibrary.js' //异常出库通知明细
import * as receiptList from './response/businessReport/receiptList.js' //回单列表
import * as outsourcingDischarge from './response/businessReport/outsourcingDischarge.js'//外包卸货表
import * as outsourcingLoading from './response/businessReport/outsourcingLoading.js' //外包装车表
import * as orderPickingMock from './response/outGoods/orderPickingMock.js';//按单拣货
import * as thirdPartyClientMock from './response/baseData/thirdPartyClientMock.js';//第三方客户
import * as outLibraryDetailMock from './response/outGoods/outLibraryDetailMock.js';//出库明细
const api = "http://localhost:50109";

/*-------------------------------------------出库明细 --------------------------------------------------*/
Mock.mock(`${api}/outLibraryDetail/getList`,'post',outLibraryDetailMock.getList);
Mock.mock(`${api}/outLibraryDetail/queryList`,'post',outLibraryDetailMock.queryList);
Mock.mock(`${api}/outLibraryDetail/deleteById`,'delete',outLibraryDetailMock.deleteById);
Mock.mock(`${api}/outLibraryDetail/add`,'post',outLibraryDetailMock.add);
Mock.mock(`${api}/outLibraryDetail/update`,'put',outLibraryDetailMock.update);

/*-------------------------------------------第三方客户 --------------------------------------------------*/
Mock.mock(`${api}/thirdPartyClient/getList`,'post',thirdPartyClientMock.getList);
Mock.mock(`${api}/thirdPartyClient/queryList`,'post',thirdPartyClientMock.queryList);
Mock.mock(`${api}/thirdPartyClient/deleteById`,'delete',thirdPartyClientMock.deleteById);
Mock.mock(`${api}/thirdPartyClient/add`,'post',thirdPartyClientMock.add);
Mock.mock(`${api}/thirdPartyClient/update`,'put',thirdPartyClientMock.update);

/*-------------------------------------------按单拣货 --------------------------------------------------*/
Mock.mock(`${api}/orderPicking/getList`,'post',orderPickingMock.getList);
Mock.mock(`${api}/orderPicking/queryList`,'post',orderPickingMock.queryList);
Mock.mock(`${api}/orderPicking/deleteById`,'delete',orderPickingMock.deleteById);
Mock.mock(`${api}/orderPicking/add`,'post',orderPickingMock.add);
Mock.mock(`${api}/orderPicking/update`,'put',orderPickingMock.update);

/*-------------------------------------------下架任务删除 --------------------------------------------------*/
Mock.mock(`${api}/obtainedTaskDelete/getList`,'post',obtainedTaskDeleteMock.getList);
Mock.mock(`${api}/obtainedTaskDelete/queryList`,'post',obtainedTaskDeleteMock.queryList);
Mock.mock(`${api}/obtainedTaskDelete/deleteById`,'delete',obtainedTaskDeleteMock.deleteById);
Mock.mock(`${api}/obtainedTaskDelete/add`,'post',obtainedTaskDeleteMock.add);
Mock.mock(`${api}/obtainedTaskDelete/update`,'put',obtainedTaskDeleteMock.update);

/*-------------------------------------------下架 --------------------------------------------------*/
Mock.mock(`${api}/obtained/getList`,'post',obtainedMock.getList);
Mock.mock(`${api}/obtained/queryList`,'post',obtainedMock.queryList);
Mock.mock(`${api}/obtained/deleteById`,'delete',obtainedMock.deleteById);
Mock.mock(`${api}/obtained/add`,'post',obtainedMock.add);
Mock.mock(`${api}/obtained/update`,'put',obtainedMock.update);

/*-------------------------------------------效期预警 --------------------------------------------------*/
Mock.mock(`${api}/vp_warning/vp_warningAll1`,'post',vp_warning.vp_warningAll1);
/*-------------------------------------------出货异常 --------------------------------------------------*/
Mock.mock(`${api}/downAbnormal/downAbnormalAll`,'post',downAbnormal.downAbnormalAll);
/*-------------------------------------------收货未上架 --------------------------------------------------*/
Mock.mock(`${api}/delvNotShelf/delvNotShelfAll`,'post',delvNotShelf.delvNotShelfAll);
/*-------------------------------------------历史库存查询--------------------------------------------------*/
Mock.mock(`${api}/historyInventory/historyInventoryAll`,'post',historyInventory.historyInventoryAll);
/*-------------------------------------------计费库存查询--------------------------------------------------*/
Mock.mock(`${api}/billingInventory/billingInventoryAll`,'post',billingInventory.billingInventoryAll);
/*-------------------------------------------在途库存--------------------------------------------------*/
Mock.mock(`${api}/en_routeInventory/en_routeInventoryAll`,'post',en_routeInventory.en_routeInventoryAll);
/*-------------------------------------------商品--------------------------------------------------*/
Mock.mock(`${api}/commodity/getList`,'post',commodityMock.getList);
Mock.mock(`${api}/commodity/queryList`,'post',commodityMock.queryList);
Mock.mock(`${api}/commodity/deleteById`,'delete',commodityMock.deleteById);
Mock.mock(`${api}/commodity/add`,'post',commodityMock.add);
Mock.mock(`${api}/commodity/update`,'put',commodityMock.update);

/*-------------------------------------------任务确认--------------------------------------------------*/
Mock.mock(`${api}/taskConfirm/getList`,'post',taskConfirmMock.getList);
Mock.mock(`${api}/taskConfirm/queryList`,'post',taskConfirmMock.queryList);
Mock.mock(`${api}/taskConfirm/deleteById`,'delete',taskConfirmMock.deleteById);
Mock.mock(`${api}/taskConfirm/add`,'post',taskConfirmMock.add);
Mock.mock(`${api}/taskConfirm/update`,'put',taskConfirmMock.update);


/*-------------------------------------------下架明细--------------------------------------------------*/
Mock.mock(`${api}/obtainedDetail/obtainedDetailCha`,'post',obtainedDetail.obtainedDetailCha);
/*-------------------------------------------出货异常--------------------------------------------------*/
Mock.mock(`${api}/abnormalOutLibrary/getList`,'post',abnormalOutLibraryMock.getList);
Mock.mock(`${api}/abnormalOutLibrary/queryList`,'post',abnormalOutLibraryMock.queryList);
Mock.mock(`${api}/abnormalOutLibrary/deleteById`,'delete',abnormalOutLibraryMock.deleteById);
Mock.mock(`${api}/abnormalOutLibrary/add`,'post',abnormalOutLibraryMock.add);
Mock.mock(`${api}/abnormalOutLibrary/update`,'put',abnormalOutLibraryMock.update);

/*-------------------------------------------出货通知--------------------------------------------------*/
Mock.mock(`${api}/outLibraryNotice/getList`,'post',outLibraryNoticeMock.getList);
Mock.mock(`${api}/outLibraryNotice/queryList`,'post',outLibraryNoticeMock.queryList);
Mock.mock(`${api}/outLibraryNotice/deleteById`,'delete',outLibraryNoticeMock.deleteById);
Mock.mock(`${api}/outLibraryNotice/add`,'post',outLibraryNoticeMock.add);
Mock.mock(`${api}/outLibraryNotice/update`,'put',outLibraryNoticeMock.update);

/*-------------------------------------------上架明细--------------------------------------------------*/
Mock.mock(`${api}/shelfDetail/shelfDetailAll1`,'post',shelfDetail.shelfDetailAll1);
Mock.mock(`${api}/shelfDetail/shelfDetailMoHu`,'post',shelfDetail.shelfDetailMoHu);

/*-------------------------------------------出库通知项目--------------------------------------------------*/
Mock.mock(`${api}/outLibraryNoticeProject/getList`,'post',outLibraryNoticeProjectMock.getList);
Mock.mock(`${api}/outLibraryNoticeProject/queryList`,'post',outLibraryNoticeProjectMock.queryList);

/*-------------------------------------------其它库存--------------------------------------------------*/
Mock.mock(`${api}/otherOutLibrary/getList`,'post',otherOutLibraryMock.getList);
Mock.mock(`${api}/otherOutLibrary/queryList`,'post',otherOutLibraryMock.queryList);
Mock.mock(`${api}/otherOutLibrary/deleteById`,'delete',otherOutLibraryMock.deleteById);
Mock.mock(`${api}/otherOutLibrary/add`,'post',otherOutLibraryMock.add);
Mock.mock(`${api}/otherOutLibrary/update`,'put',otherOutLibraryMock.update);

/*-------------------------------------------温度类型--------------------------------------------------*/
Mock.mock(`${api}/TemperatureProperty/TemperaturePropertyFindAll`,'post',TemperatureProperty.TemperaturePropertyFindAll);
Mock.mock(`${api}/TemperatureProperty/TemperaturePropertyShanChu1`,'delete',TemperatureProperty.TemperaturePropertyShanChu1);
/*-------------------------------------------库位类型--------------------------------------------------*/
Mock.mock(`${api}/LocationType/ChaKang`,'post',LocationType.ChaKang);
Mock.mock(`${api}/LocationType/LocationTypeShan`,'delete',LocationType.LocationTypeShan);
/*-------------------------------------------空储位--------------------------------------------------*/
Mock.mock(`${api}/emptyStorage/getList`,'post',emptyStorageMock.getList);
Mock.mock(`${api}/emptyStorage/queryList`,'post',emptyStorageMock.queryList);

/*-------------------------------------------订单类型--------------------------------------------------*/
Mock.mock(`${api}/Ordertype/OrdertypeList`,'post',Ordertype.OrdertypeList);
Mock.mock(`${api}/Ordertype/OrdertypeAddFindAdd`,'post',Ordertype.OrdertypeAddFindAdd);
Mock.mock(`${api}/Ordertype/OrdertypeAddXgai`,'put',Ordertype.OrdertypeAddXgai);
Mock.mock(`${api}/Ordertype/OrdertypeShanChu1`,'delete',Ordertype.OrdertypeShanChu1);


/*-------------------------------------------可用储位--------------------------------------------------*/
Mock.mock(`${api}/availableStorage/getList`,'post',availableStorageMock.getList);
Mock.mock(`${api}/availableStorage/queryList`,'post',availableStorageMock.queryList);

/*-------------------------------------------储位定义--------------------------------------------------*/
Mock.mock(`${api}/storageDefinition/getList`,'post',storageDefinitionMock.getList);
Mock.mock(`${api}/storageDefinition/queryList`,'post',storageDefinitionMock.queryList);
Mock.mock(`${api}/storageDefinition/deleteById`,'delete',storageDefinitionMock.deleteById);
Mock.mock(`${api}/storageDefinition/add`,'post',storageDefinitionMock.add);
Mock.mock(`${api}/storageDefinition/update`,'put',storageDefinitionMock.update);
Mock.mock(`${api}/storageDefinition/batchDisableById`,'delete',storageDefinitionMock.batchDisableById);

/*-------------------------------------------仓库定义--------------------------------------------------*/
Mock.mock(`${api}/warehouseDefinition/getList`,'post',warehouseDefinitionMock.getList);
Mock.mock(`${api}/warehouseDefinition/queryList`,'post',warehouseDefinitionMock.queryList);
Mock.mock(`${api}/warehouseDefinition/deleteById`,'delete',warehouseDefinitionMock.deleteById);
Mock.mock(`${api}/warehouseDefinition/add`,'post',warehouseDefinitionMock.add);
Mock.mock(`${api}/warehouseDefinition/update`,'put',warehouseDefinitionMock.update);
Mock.mock(`${api}/warehouseDefinition/batchDeleteById`,'delete',warehouseDefinitionMock.deleteById);

/*-------------------------------------------供应商--------------------------------------------------*/
Mock.mock(`${api}/supplier/getList`,'post',supplierMock.getList);
Mock.mock(`${api}/supplier/queryList`,'post',supplierMock.queryList);
Mock.mock(`${api}/supplier/deleteById`,'delete',supplierMock.deleteById);
Mock.mock(`${api}/supplier/add`,'post',supplierMock.add);
Mock.mock(`${api}/supplier/update`,'put',supplierMock.update);

/*-------------------------------------------商品明细--------------------------------------------------*/
Mock.mock(`${api}/commodityDetail/getList`,'post',commodityDetailMock.getList);
Mock.mock(`${api}/commodityDetail/queryList`,'post',commodityDetailMock.queryList);

/*-------------------------------------------客户--------------------------------------------------*/
Mock.mock(`${api}/client/getList`,'post',clientMock.getList);
Mock.mock(`${api}/client/queryList`,'post',clientMock.queryList);
Mock.mock(`${api}/client/add`,'post',clientMock.add);
Mock.mock(`${api}/client/update`,'put',clientMock.update);
Mock.mock(`${api}/client/deleteById`,'delete',clientMock.deleteById);

/*-------------------------------------------效期预警--------------------------------------------------*/
Mock.mock(`${api}/vp_warning/getList`,'post',vp_warningMock.getList);
Mock.mock(`${api}/vp_warning/queryList`,'post',vp_warningMock.queryList);
/*-------------------------------------------基础配置--------------------------------------------------*/
Mock.mock(`${api}/Measurement/MeasurementAll`,'post',Measurement.MeasurementAll);
Mock.mock(`${api}/Measurement/MeasurementMoHu`,'post',Measurement.MeasurementMoHu);
Mock.mock(`${api}/Measurement/ReturnAdd1`,'post',Measurement.ReturnAdd1);
Mock.mock(`${api}/Measurement/ReturnUpdate`,'put',Measurement.ReturnUpdate);
Mock.mock(`${api}/Measurement/ShanChu`,'delete',Measurement.ShanChu);



//退货管理拦截
Mock.mock(`${api}/ReturnsManagement/CustomerReturnsFindAll`,'post',ReturnsManagement.CustomerReturnsFindAll); //页面查询
Mock.mock(`${api}/ReturnsManagement/CustomerReturnsMoHu`,'post',ReturnsManagement.CustomerReturnsMoHu);//模糊查询
Mock.mock(`${api}/ReturnsManagement/CustomerAddData`,'post',ReturnsManagement.CustomerAddData);
//退货上架
Mock.mock(`${api}/ReturnGoods/ReturnGoodsFindAll`,'post',ReturnGoods.ReturnGoodsFindAll); //查询
Mock.mock(`${api}/ReturnGoods/ReturnGoodsMoHu`,'post',ReturnGoods.ReturnGoodsMoHu);
Mock.mock(`${api}/ReturnGoods/ReturnGoodsXgaiData`,'put',ReturnGoods.ReturnGoodsXgaiData);  //修改
Mock.mock(`${api}/ReturnGoods/ReturnGoodsTian`,'post',ReturnGoods.ReturnGoodsTian);  //添加
//退货验收
Mock.mock(`${api}/ReturnsMaterial/ReturnsReturnsFindAll`,'post',ReturnsMaterial.ReturnsReturnsFindAll); //查询
Mock.mock(`${api}/ReturnsMaterial/ReturnsReturnsMoHu`,'post',ReturnsMaterial.ReturnsReturnsMoHu);
//退货登记
Mock.mock(`${api}/ReturnReservation/ReturnReservationFindCha`,'post',ReturnReservation.ReturnReservationFindCha); //查询
Mock.mock(`${api}/ReturnReservation/ReturnReservationMoHuCha`,'post',ReturnReservation.ReturnReservationMoHuCha);
Mock.mock(`${api}/ReturnReservation/ReturnUpdate`,'put',ReturnReservation.ReturnUpdate);  //修改
Mock.mock(`${api}/ReturnReservation/ReturnAdd1`,'post',ReturnReservation.ReturnAdd1);  //添加
/*-------------------------------------------收货未上架--------------------------------------------------*/
Mock.mock(`${api}/delvNotShelf/getList`,'post',delvNotShelfMock.getList);
Mock.mock(`${api}/delvNotShelf/queryList`,'post',delvNotShelfMock.queryList);

/*-------------------------------------------出货异常--------------------------------------------------*/
Mock.mock(`${api}/DownAbnormal/getList`,'post',DownAbnormalMock.getList);
Mock.mock(`${api}/DownAbnormal/queryList`,'post',DownAbnormalMock.queryList);

/*-------------------------------------------客户库存--------------------------------------------------*/
Mock.mock(`${api}/clientInventory/getList`,'post',clientInventoryMock.getList);
Mock.mock(`${api}/clientInventory/queryList`,'post',clientInventoryMock.queryList);

/*-------------------------------------------越库管理--------------------------------------------------*/
Mock.mock(`${api}/YueKuManagement/OrderFindAll`,'post',YueKuManagement.orderlist);
Mock.mock(`${api}/YueKuManagement/YueKuInquire`,'post',YueKuManagement.YueKuInquire);
Mock.mock(`${api}/YueKuManagement/YueKuDelete`,'delete',YueKuManagement.YueKuDelete);
Mock.mock(`${api}/YueKuManagement/YueKuUpdate`,'put',YueKuManagement.update);
Mock.mock(`${api}/YueKuManagement/YueKuAdd`,'post',YueKuManagement.seve);
/*-------------------------------------------库内转移--------------------------------------------------*/
Mock.mock(`${api}/InventoryManagement/StockFindAll`,'post',StockTransfer.StockList);
Mock.mock(`${api}/InventoryManagement/StockInquire`,'post',StockTransfer.StockInquire);
/*-------------------------------------------生产托盘转移--------------------------------------------------*/
Mock.mock(`${api}/GenerateInventoryTransfer/GenerateFindAll`,'post',GenerateInventoryTransfer.Generatelist);
Mock.mock(`${api}/GenerateInventoryTransfer/GenerateInquire`,'post',GenerateInventoryTransfer.GenerateInquire);

/*-------------------------------------------产品属性--------------------------------------------------*/
Mock.mock(`${api}/Product/ProductDataList`,'post',Product.ProductDataList); //查询
Mock.mock(`${api}/Product/ProductShanChu`,'delete',Product.ProductShanChu); //删除
/*-------------------------------------------盘点管理--------------------------------------------------*/
Mock.mock(`${api}/ManagementWithinTheLibrary/InvenFindAll`,'post',Inventory.Invenlist);
Mock.mock(`${api}/ManagementWithinTheLibrary/InvenUpdate`,'put',Inventory.Iupdate);
Mock.mock(`${api}/ManagementWithinTheLibrary/InvenDelete`,'delete',Inventory.Idelete);
/*-------------------------------------------盘点差异--------------------------------------------------*/
Mock.mock(`${api}/CountDifference/CountFindAll`,'post',CountDifference.CountList);
/*-------------------------------------------综合盘点--------------------------------------------------*/
Mock.mock(`${api}/ComprehensiveInventory/ComperFindAll`,'post',ComprehensiveInventory.CompreList);
/*-------------------------------------------动碰盘--------------------------------------------------*/
Mock.mock(`${api}/TouchPlate/TouchFindAll`,'post',TouchPlate.Touchlist);
/*-------------------------------------------复盘--------------------------------------------------*/
Mock.mock(`${api}/Compound/CompoundFindAll`,'post',Compound.CompoundList);
/*-------------------------------------------上架调整--------------------------------------------------*/
Mock.mock(`${api}/ShelfAdjustment/ShelFindAll`,'post',ShelfAdjustment.Shellist);
/*-------------------------------------------下架调整--------------------------------------------------*/
Mock.mock(`${api}/OutOfFrameAdjustment/OutOfFindAll`,'post',OutOfFrameAdjustment.OutOfList);
/*-------------------------------------------盘点差异过账--------------------------------------------------*/
Mock.mock(`${api}/CheckDifferencePost/CheckFindAll`,'post',CheckDifferencePost.CheckList);
/*-------------------------------------------动仓盘点--------------------------------------------------*/
Mock.mock(`${api}/DynamicInventory/DynaFindAll`,'post',DynamicInventory.DynaList);
/*-------------------------------------------效期预警--------------------------------------------------*/
Mock.mock(`${api}/ValidityWarning/ValidityFindAll`,'post',ValidityWarning.ValidityList);
/*---------------------------------------------进货通知明细-----------------------------------------------*/
Mock.mock(`${api}/purchaseNotice/PurchaseFindAll`,'post',purchaseNotice.PurchaseList);
Mock.mock(`${api}/purchaseNotice/PurchaseInquire`,'post',purchaseNotice.PurchaseInquire);
/*---------------------------------------------异常出库通知明细-----------------------------------------------*/
Mock.mock(`${api}/abnormalOutLibrary/AbnorFindAll`,'post',abnormalOutLibrary.AbnorLits);
Mock.mock(`${api}/abnormalOutLibrary/AbnorInquire`,'post',abnormalOutLibrary.AbnorInquire);
/*---------------------------------------------货品库存-----------------------------------------------*/
Mock.mock(`${api}/goodsStock/GoodsFindAll`,'post',goodsStock.GoodsList);
/*---------------------------------------------回单列表-----------------------------------------------*/
Mock.mock(`${api}/receiptList/ReceiptFindAll`,'post',receiptList.ReceiptList);
/*---------------------------------------------外包卸货表-----------------------------------------------*/
Mock.mock(`${api}/outsourcingDischarge/outsourcingDischargeFindAll`,'post',outsourcingDischarge.outsourcingDischargeList);
/*---------------------------------------------外包装车表-----------------------------------------------*/
Mock.mock(`${api}/outsourcingLoading/outsourcingLoadingFindAll`,'post',outsourcingLoading.outsourcingLoadingList);
export default Mock;
