﻿/// <reference path='../definitions/references.d.ts' />

module Spirograph.Interaction {
    'use strict';

    EventAggregator.subscribe('gearVisibilityChange', (newVisibility: boolean) => {
        d3.selectAll('.gear.fixed, .gear.rotating')
            .style('visibility', newVisibility ? 'visible' : 'hidden');
    });
} 