import Component from 'project1/Component';
import Log from 'sap/base/Log';
import SmartFilterBar from 'sap/ui/comp/smartfilterbar/SmartFilterBar';
import SmartTable from 'sap/ui/comp/smarttable/SmartTable';
import Controller from 'sap/ui/core/mvc/Controller';
import View from 'sap/ui/core/mvc/View';
import ODataModel from 'sap/ui/model/odata/v2/ODataModel';

/**
 * @namespace project1.controller
 */
export default class View1 extends Controller {
  /*eslint-disable @typescript-eslint/no-empty-function*/
  public async onInit(): Promise<void> {
    const smartTable = (this.getView() as View).byId(
      'container-project1---View1--smartTableBooks'
    ) as SmartTable;
    const genreModel = (this.getOwnerComponent() as Component).getModel(
      'genre'
    ) as ODataModel;

    smartTable.setModel(genreModel);
    smartTable.setEntitySet('Genres');
    // load data automatically on startup
    smartTable.setEnableAutoBinding(true);
    smartTable.rebindTable(true);
  }


  public onPressGoToViewDefaultModel(): void {
    this.getOwnerComponent().getRouter().navTo("ViewDefaultModel");
  }
}
