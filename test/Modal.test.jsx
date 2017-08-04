import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import Modal from "../client/views/component/Modal";
import Layout from '../client/views/component/Layout';

describe("Modal", () => {
    let props;
    let mountedModal;
    const modal = () => {
        if (!mountedModal) {
            mountedModal = mount(
                <Modal {...props} />
            );
        }
        return mountedModal;
    }

    beforeEach(() => {
        props = {
            show: false,
            showMask: true,
            maskClick: undefined
        };
        mountedModal = undefined;
    });

    it("always renders a `Layout`", () => {
        expect(modal().find(Layout).length).to.equal(1);
    });

    describe("when `show` is passed", () => {
        beforeEach(() => {
            props.show = true;
        });

        it("transition left 0ms", () => {
            const wrappingDiv = modal().find(Layout);
            expect(wrappingDiv.props().style.transition).to.equal('0ms left 0ms');
        });
    });

});