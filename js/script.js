// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: March 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateAreaOfTriangle () {
  // input
  const heightOfTriangle = parseInt(document.getElementById('height-of-triangle').value)
  const baseOfTriangle = parseInt(document.getElementById('base-of-triangle').value)

  // process
  const areaOfTriangle = (heightOfTriangle * baseOfTriangle) /2

  // output
  document.getElementById('area').innerHTML = 'The area is: ' + areaOfTriangle + ' cm²'
}