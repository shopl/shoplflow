import { useEffect, useRef } from 'react';
import componentsInfoStorage from '@src/shared/storages/componentsInfoStorage';
import useStorage from '@src/shared/hooks/useStorage';
import { checkShopl } from '@root/utils/checkShopl';

export default function App() {
  const { refresh } = useStorage(componentsInfoStorage);
  const observer = useRef(null);
  function accessIframeContent(rootElement: HTMLElement) {
    const components: HTMLElement[] = [];

    function traverseNode(node: HTMLElement) {
      if (node.id === 'root') {
        Array.from(node.children).forEach(traverseNode);
        return;
      }

      components.push(node);

      if (node.tagName === 'IFRAME') {
        const iframe = (node as HTMLIFrameElement).contentDocument;
        traverseNode(iframe.body);
        return;
      }

      Array.from(node.children).forEach(traverseNode);
    }

    traverseNode(rootElement);

    return components;
  }

  const handleRenderComplete = async () => {
    let rootElement = document.querySelector('#root');

    let result: HTMLElement[] = [];

    // If #root exists, search elements after #root
    if (rootElement) {
      result = accessIframeContent(rootElement);
    } else {
      // If #root doesn't exist, search all elements in body
      rootElement = document.body;
      result = accessIframeContent(rootElement);
    }

    // Update component info storage
    const system = result.filter((element) => Boolean(element.dataset?.shoplflow));

    if (system.length < 1) {
      return;
    }

    const filterElements = system?.reduce((acc, element) => {
      const elementName = element.dataset.shoplflow;
      return {
        ...acc,
        [elementName]: elementName in acc ? acc[elementName] + 1 : 1,
      };
    });
    if (system) {
      await chrome.storage.local.set({
        systems: system.length,
        components: result.length,
        systemElement: filterElements,
      });
    }
  };

  useEffect(() => {
    const origin = window.location.origin;
    if (!checkShopl(origin)) {
      return;
    }
    handleRenderComplete();
    observer.current = new MutationObserver(handleRenderComplete);

    observer.current.observe(document.body || document.querySelector('#root'), {
      childList: true,
      attributes: true,
      subtree: true,
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [handleRenderComplete, refresh]);

  return null;
}
