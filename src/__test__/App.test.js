import { screen,render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom"
import { mount } from "enzyme";
import App from './../App';
describe("e comerce app testing",()=>{
    test("App snapshot  testing",()=>{
        const Appcomponet =renderer.mount(<Router><App/></Router>)
       
    })
})