// ==========================================================================
// Project:   TemplateTest - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals TemplateTest */

// This page describes the main user interface for your application.
TemplateTest.mainPage = SC.Page.design({

    // The main pane is made visible on screen as soon as your app is loaded.
    // Add childViews to this pane for views to display immediately on page
    // load.
    mainPane: SC.MainPane.design({

        childViews: 'splitView'.w(),

        splitView: SC.SplitView.design({
            layout: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            defaultThickness: 0.25,
            layoutDirection: SC.LAYOUT_VERTICAL,

            topLeftView: SC.ScrollView.design({
                layout: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },

                contentView: SC.ListView.design({
                    layout: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    contentBinding: 'TemplateTest.itemsController.arrangedObjects',

                    exampleView: SC.View.design({
						childViews: 'label'.w(),
						
						label:SC.LabelView.design({
							layout: { top: 0, right: 0, bottom: 0, left: 0 },
							valueBinding: '.parentView.content.title'
						})
                    })

                })
            }),

            dividerView: SC.SplitDividerView.design(),

            bottomRightView: SC.SplitView.design({
                layout: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                defaultThickness: 0.25,
                layoutDirection: SC.LAYOUT_VERTICAL,

                topLeftView: SC.ScrollView.design({
                    layout: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },

                    contentView: SC.ListView.design({
                        contentBinding: 'TemplateTest.itemsController.arrangedObjects',
                        exampleView: TemplateTest.ListItem
                    })

                }),

                dividerView: SC.SplitDividerView.design(),

                bottomRightView: SC.ScrollView.design({
                    layout: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                
                    contentView: TemplateTest.List.design({
                        contentBinding: 'TemplateTest.itemsController'
                    })
                
                })
            })

        })
    })

});
