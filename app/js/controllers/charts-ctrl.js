'use strict';

angular
    .module('app.controllers')
    .controller('ChartCtrl', function($scope, $location, $stateParams, Restangular, uiGridConstants, DateService, ResourceService) {
        var date = new Date();
        Restangular.one('events?filter[simple][startDateTime][$lt]=' + (new Date).toISOString().split('T')[0])
        .get()
        .then(function(data) {
            var dates = {}
            _.forEach(data.data, function(event) {
                dates['rsvps'] = event.relationships.rsvps.length || 0;
                dates['attendance'] = event.relationships.attendees.length || 0;
                var positiveRsvps = 0;
                _.forEach()
                dates['rsvps'] = event.relationships.rsvps.length || 0;
            })
        })
        $scope.HCInitiativeAnalysis = {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Dynamic Chart'
            },
            subtitle: {
                text: 'Source: API checkin data'
            },
            xAxis: {
                categories: eventNameValues.reverse()
            },
            yAxis: {
                title: {
                    text: 'Checkins per event'
                },
                labels: {
                    useHTML: true
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: 'Events',
                data: attendeesValues.reverse()
            }]
        };

    });