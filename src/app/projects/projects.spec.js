"use strict";

describe("ProjectsController", function () {

  var controller;

  beforeEach(module("app.projects.controller"));
//  beforeEach(module("app.todosService"));

  it("should be defined", function () {

    expect(controller).toBeDefined();

  });

});

describe("Projects directive", function () {

  beforeEach(module("app.projects.directive"));

});
