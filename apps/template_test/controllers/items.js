// ==========================================================================
// Project:   TemplateTest.itemsController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals TemplateTest */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
TemplateTest.itemsController = SC.ArrayController.create(
/** @scope TemplateTest.itemsController.prototype */
{
    // TODO: Add your own code here.
    content: [SC.Object.create({
        title: 'itemOne'
    }),
    SC.Object.create({
        title: 'itemTwo'
    }),
    SC.Object.create({
        title: 'itemThree'
    }),
    SC.Object.create({
        title: 'itemFour'
    }),
    SC.Object.create({
        title: 'itemFive'
    }),
    SC.Object.create({
        title: 'itemSix'
    }),
    SC.Object.create({
        title: 'itemSeven'
    })]
});
