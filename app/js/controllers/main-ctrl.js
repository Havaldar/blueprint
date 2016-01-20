'use strict';

angular
.module('app.controllers')
.controller('MainCtrl', function($scope, $location, Restangular) {
    $scope.loadingPromise = Restangular.one('people/me')
        .get()
        .then(function(data) {
            data = data.data;
            $scope.eboard = true;
            $scope.user = data;
        })
        .catch(function(res) {
            var status = res.data.errors[0].status;
            if(status === '401') {
                $scope.signIn();
            }
            if(status === '403') {
                $scope.eboard = false;
            }
        });
    $scope.signIn = function() {
        var url = 'https://api.tnyu.org/v2/auth/facebook?success=' + window.encodeURIComponent($location.absUrl());
        window.location = url;
    };

    $scope.signOut = function() {
        var url = 'https://api.tnyu.org/v2/auth/facebook/logout?doExternalServiceLogout=true&success=' + window.encodeURIComponent('http://google.com/');
        window.location = url;
    };
    $scope.platforms = [
        {
            "name": "Homepage",
            "url": "http://techatnyu.org",
            "description": "Main Tech@NYU site",
            "for": "Public-facing websites"
        },
        {
            "name": "Cal",
            "url": "http://cal.techatnyu.org",
            "description": "Calendar generated using the API",
            "for": "Public-facing websites"
        },
        {
            "name": "Checkin",
            "url": "http://checkin.techatnyu.org",
            "description": "Check people into events",
            "for": "Public-facing websites"
        },
        {
            "name": "RSVP",
            "url": "http://rsvp.techatnyu.org",
            "description": "RSVP members to one of our events",
            "for": "Public-facing websites"
        },
        {
            "name": "Startup Week",
            "url": "http://normal.nyusw.com",
            "description": "Spring 2015 #nyusw site",
            "for": "Public-facing websites"
        },
        {
            "name": "Career Fair",
            "url": "http://fair.nyusw.com",
            "description": "Fall 2015 #nyusw site",
            "for": "Public-facing websites"
        },
        {
            "name": "Ship",
            "url": "http://ship.techatnyu.org",
            "description": "List of the stuff we have shipped",
            "for": "Public-facing websites"
        },
        {
            "name": "Demodays",
            "url": "http://demodays.co",
            "description": "Permanent DemoDays site",
            "for": "Public-facing websites"
        },
        {
            "name": "API",
            "url": "https://api.tnyu.org",
            "description": "Stores/offers access to all Tech@NYU-related data.",
            "for": "General Internal Platforms",
        },
        {
            "name": "Intranet",
            "url": "http://intranet.sexy",
            "description": "Administration system to interact with the API.",
            "for": "General Internal Platforms"
        },
        {
            "name": "Discuss",
            "url": "http://discuss.techatnyu.org",
            "description": "Platform to discuss issues surrounding Tech@NYU.",
            "for": "General Internal Platforms"
        },
        {
            "name": "Zurmo",
            "url": "http://bd.techatnyu.org",
            "description": "Customer relationship management.",
            "for": "Business Development",
        },
        {
            "name": "Jira",
            "url": "http://jira.tnyu.org",
            "description": "Issue and project tracking platform.",
            "for": "General Internal Platforms"
        },
        {
            "name": "Overlord",
            "url": "http://overlord.tnyu.org",
            "description": "Celery task runner.",
            "for": "Infrastructure"
        },
        {
            "name": "Frontify",
            "url": "https://app.frontify.com/d/MlLYiAFc3BzO/tech-nyu-style-guide",
            "description": "Our internal style guide.",
            "for": "Marketing"
        }
    ];
});