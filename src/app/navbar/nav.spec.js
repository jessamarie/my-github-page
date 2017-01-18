"use strict";

describe("NavController", function () {

  var controller;

  beforeEach(module("app.nav.controller"));
//  beforeEach(module("app.todosService"));

  it("should be defined", function () {

    expect(controller).toBeDefined();

  });

});

describe("Nav directive", function () {

  beforeEach(module("app.nav.directive"));

});
