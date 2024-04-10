import { mount, shallowMount } from "@vue/test-utils";
import ButtonComponentVue from "@/components/ButtonComponent.vue";

describe("ButtonComponent.vue", () => {
  it("renders props.value when passed", () => {
    const value = "click me";
    const wrapper = shallowMount(ButtonComponentVue, {
      propsData: { value },
    });
    expect(wrapper.text()).toMatch(value);
  });

  it("triggers props click function when clicked", async () => {
    const mockCallBack = jest.fn();
    const value = "click me";
    const wrapper = shallowMount(ButtonComponentVue, {
      propsData: {
        value,
        onClick: mockCallBack,
      },
    });
    wrapper.find("button").trigger("click");
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it("loads when state is loading", async () => {
    const wrapper = mount(ButtonComponentVue, {
      propsData: {
        state: "loading",
      },
    });
    expect(wrapper.find("div.animate-spin").exists()).toBe(true);
  });
  it("Doesn't load when state is not loading", async () => {
    const wrapper = mount(ButtonComponentVue, {
      propsData: {
        state: "default",
      },
    });
    expect(wrapper.find("div.animate-spin").exists()).toBe(false);
  });
  it("denies click when props state is loading", async () => {
    const mockCallBack = jest.fn();
    const wrapper = shallowMount(ButtonComponentVue, {
      propsData: {
        state: "loading",
        onClick: mockCallBack,
      },
    });
    wrapper.find("button").trigger("click");
    expect(mockCallBack.mock.calls.length).toBe(0);
  });
  it("allows click when props state is not loading", async () => {
    const mockCallBack = jest.fn();
    const wrapper = shallowMount(ButtonComponentVue, {
      propsData: {
        state: "default",
        onClick: mockCallBack,
      },
    });
    wrapper.find("button").trigger("click");
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
  it("Deny click when state is disabled", async () => {
    const mockCallBack = jest.fn();
    const wrapper = shallowMount(ButtonComponentVue, {
      propsData: {
        state: "disabled",
        onClick: mockCallBack,
      },
    });
    wrapper.find("button").trigger("click");
    expect(mockCallBack.mock.calls.length).toBe(0);
  });
});
