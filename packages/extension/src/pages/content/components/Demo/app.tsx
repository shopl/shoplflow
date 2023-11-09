import { useCallback, useEffect, useRef } from 'react';
import componentsInfoStorage from '@src/shared/storages/componentsInfoStorage';
import useStorage from '@src/shared/hooks/useStorage';

export default function App() {
  const { refresh } = useStorage(componentsInfoStorage);
  const observer = useRef(null);

  function accessIframeContent(rootElement) {
    const components = [];

    function traverseNode(node) {
      if (node.id === 'root') {
        Array.from(node.children).forEach(traverseNode);
        return;
      }

      components.push(node);

      if (node.tagName === 'IFRAME' && node.contentDocument) {
        traverseNode(node.contentDocument.body);
        return;
      }

      Array.from(node.children).forEach(traverseNode);
    }

    traverseNode(rootElement);

    return components;
  }
  const handleRenderComplete = useCallback(async () => {
    let rootElement = document.querySelector('#root');

    let result = [];

    // If #root exists, search elements after #root
    if (rootElement) {
      result = accessIframeContent(rootElement);
    } else {
      // If #root doesn't exist, search all elements in body
      rootElement = document.body;
      result = accessIframeContent(rootElement);
    }

    // Update component info storage
    const system = result.filter((element) => Boolean(element.dataset.shoplflow));

    const elementTagInfo = result.map((element) => element.tagName);
    // get length of each tag
    const elementTagInfoSet = new Set(elementTagInfo);
    const elementTagInfoArray = [...elementTagInfoSet];
    const elementTagInfoCount = elementTagInfoArray.map((tag) => ({
      tag,
      count: elementTagInfo.filter((element) => element === tag).length,
    }));

    const systemTagInfo = system.map((element) => element.dataset.shoplflow);
    // get length of each tag
    const systemTagInfoSet = new Set(systemTagInfo);
    const systemTagInfoArray = [...systemTagInfoSet];
    const systemTagInfoCount = systemTagInfoArray.map((tag) => ({
      tag,
      count: systemTagInfo.filter((element) => element === tag).length,
    }));

    await chrome.storage.local.set({
      systems: system.length,
      components: result.length,
      elementTagInfoCount: elementTagInfoCount.sort((a, b) => b.count - a.count),
      systemTagInfoCount: systemTagInfoCount.sort((a, b) => b.count - a.count),
    });
  }, []);

  useEffect(() => {
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
