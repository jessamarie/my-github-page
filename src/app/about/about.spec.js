"use strict";

describe("AboutController", function () {

  var controller;

  beforeEach(module("app.about.controller"));
//  beforeEach(module("app.todosService"));

  it("should be defined", function () {

    expect(controller).toBeDefined();

  });

});

describe("About directive", function () {

  beforeEach(module("app.about.directive"));

});
