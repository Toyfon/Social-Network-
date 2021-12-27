import React from 'react'
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus Component', () => {
    test('status from props should be in state', () => {
        const component = create(<ProfileStatus status={'HELLO'} updateStatus={()=>{}}/>)
        const instance = component.getInstance()
        expect(instance?.props.status).toBe('HELLO')
    })

    test('after creation span should be displayed', () => {
        const component = create(<ProfileStatus status={'HELLO'} updateStatus={()=>{}}/>)
        const root = component.root
        expect(()=>{
            let input = root?.findByType('input')
        }).toThrow()
    })

    test(`after creation input shouldn't be displayed`, () => {
        const component = create(<ProfileStatus status={'HELLO'} updateStatus={()=>{}}/>)
        const root = component.root
        let span = root?.findByType('span')
        expect(span).not.toBeNull()
    })

    test('after creation span should be contain correct status', () => {
        const component = create(<ProfileStatus status={'HELLO'} updateStatus={()=>{}}/>)
        const root = component.root
        let span = root?.findByType('span')
        expect(span?.children[0]).toBe('HELLO')
    })

    test('input should be displayed in edit mode instead span', () => {
        const component = create(<ProfileStatus status={'HELLO'} updateStatus={()=>{}}/>)
        const root = component.root
        let span = root?.findByType('span')
        span?.props.onDoubleClick()
        let input = root?.findByType('input')
        expect(input?.props.value).toBe('HELLO')
    })

    test('callback should ba called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'HELLO'} updateStatus={mockCallback}/>)
         const instance = component.getInstance()
         // @ts-ignore
        instance?.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})