// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm.addons.mod_quiz')

/**
 * Directive to render a calculated simple question.
 *
 * @module mm.addons.mod_quiz
 * @ngdoc directive
 * @name mmaModQuizQuestionCalculatedSimple
 */
.directive('mmaModQuizQuestionCalculatedSimple', function($log, $mmaModQuestionHelper) {
	$log = $log.getInstance('mmaModQuizQuestionCalculatedSimple');

    return {
        restrict: 'A',
        priority: 100,
        templateUrl: 'addons/mod_quiz/questions/base/text.html',
        link: function(scope) {
            $mmaModQuestionHelper.inputTextDirective(scope, $log);
        }
    };
});