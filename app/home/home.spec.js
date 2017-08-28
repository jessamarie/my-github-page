"use strict";

describe("HomeController", function () {

  var controller;

  beforeEach(module("app.home.controller"));
//  beforeEach(module("app.todosService"));

  it("should be defined", function () {

    expect(controller).toBeDefined();

  });

});

describe("Home directive", function () {

  beforeEach(module("app.home.directive"));

});
