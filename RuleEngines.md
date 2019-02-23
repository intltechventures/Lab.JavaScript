
JavaScript Rule Engine Resources
====

### References
* ...


### Potential Solutions
* ...



### Articles to read, assess, select, sort...
* Structuring and validating business rules in JavaScript
  * https://medium.com/@gchudnov/structuring-and-validating-business-rules-in-javascript-fbaa1019902a


* http://www.flexrule.com/
  * NOTE: Not strictly a JavaScript based solution, need to examine a bit more
    * See "Decision Table Web Component"
      * "Decision Table component is a business rule JavaScript library that allows you to integrate business rule authoring experience into you JavaScript applications. Simply tell the component which element on your screen is the editor and that’s it! It transforms that element to a Decision Table editor."
    * See "Flow Web Component"
      * "The business rule JavaScript library for Flow editor component allows your users visually understand the flow of business rules, decisions, tasks and other types of activities your web application! The editor component supports out-of-the-box toolbox so you can enable users to build flow by drag-and-drop from it to the canvas."
      * "The flow can be any type of complex sequence in your application: Flow, Workflow, RuleFlow, DecisionFlow… Extract them and let your users compose them visually."
  * TO-DO: 
    * Move to Lab.Architecture
    * create separate \RulesEngine folder, under \VendorSolutions
    * begin assembling current list of commercial, Open Source solutions
  * http://www.flexrule.com/solution/
  * http://www.flexrule.com/server/
  * http://www.flexrule.com/archives/javascript-rules-engine/


* NPM solutions...(232 listed entries)
  * https://npms.io/search?q=rules%20engine

* Libraries.io (10 packages)
  * https://libraries.io/search?keywords=rule+engine&languages=JavaScript

* ThingsBoard IoT Platform
  * https://thingsboard.io/docs/user-guide/rule-engine-2-0/re-getting-started/
  * https://thingsboard.io/docs/user-guide/rule-engine-2-0/overview/
    * "ThingsBoard Rule Engine is a highly customizable and configurable system for complex event processing. With rule engine you are able to filter, enrich and transform incoming messages originated by IoT devices and related assets. You are also able to trigger various actions, for example, notifications or communication with external systems."
  * https://thingsboard.io/docs/user-guide/rule-engine-2-0/architecture/
  

* Paper: JSON Rules - The JavaScript Rule Engine
  * http://ceur-ws.org/Vol-486/kese2009-07.pdf
    * Abstract: "here is a considerable browserpotential in being able to easily wire together different services into newfunctionality. Usually, developers use JavaScript or related technologiesto do browser programming. This short paper presents, JSON Rules, aJavaScript  rule  engine  running  Event-Condition-Action  rules  triggeredby Document-Object-Model Events"
    * create and execute rules in a Web browser
    * support for ECA and PR rules
    * forward chaining rule engine, influenced by the RETE algorithm;
    * process atomic event-facts;
    * the Working Memory contains beside regular facts, event facts

* Github Implementations?
  * https://github.com/CacheControl/json-rules-engine
    * License: [ISC](https://github.com/CacheControl/json-rules-engine/blob/master/LICENSE)
    * https://www.npmjs.com/package/json-rules-engine

  * https://github.com/anywhichway/rule-reactor
    * "A light weight, fast, expressive forward chaining business rule engine leveraging JavaScript internals, lazy cross-products, and Functions as objects rather than Rete. "
    * "At 50K (24K minified) vs 577K (227K minified) for Nools, a comparable speed for many applications, plus a low memory impact pattern and join processor, rule-reactor is perfect for memory constrained apps like those on mobile devices."
    * "Preliminary tests show performance close to that of Nools. However, the rule-reactor core is just 41K (19K minified) vs 577K (227K minified) for Nools. At runtime, rule-reactor will also consume many megabytes less memory than nools for its pattern and join processing."
    * http://anywhichway.github.io/rule-reactor.html

  * Nools
    * "Rete based rules engine written in javascript"
    * http://noolsjs.com/
      * http://noolsjs.com/examples.html
    * https://github.com/noolsjs/nools
      * "```C2FO is no longer maintaining this project.```" (KM NOTE: Last updated Feb, 19, 2018)
    * License: MIT

  * json-logic-js
    * https://github.com/jwadhams/json-logic-js
    * http://jsonlogic.com/
      * "JsonLogic isn’t a full programming language. It’s a small, safe way to delegate one decision. You could store a rule in a database to decide later. You could send that rule from back-end to front-end so the decision is made immediately from user input. Because the rule is data, you can even build it dynamically from user actions or GUI input."
      * "JsonLogic has no setters, no loops, no functions or gotos. One rule leads to one decision, with no side effects and deterministic computation time."
      * "JsonLogic is, effectively, an abstract syntax tree, so order of operations is unambiguous"
      * "Secure. We never eval(). Rules only have read access to data you provide, and no write access to anything."
    * License: MIT

  * https://github.com/santanusinha/json-rules

  * https://github.com/RxNT/json-rules-engine-simplified
    * License: Apache Licence 2.0.
    * https://blogs.sap.com/2018/03/28/frontend-business-rules-engine-with-ui5-or-how-i-made-myself-superfluous/
    * https://github.com/RxNT

  * node-rules
    * https://mithunsatheesh.github.io/node-rules/
      * "Node-rules is a light weight forward chaining Rule Engine, written in JavaScript."
    * https://github.com/mithunsatheesh/node-rules/wiki
    * https://github.com/mithunsatheesh/node-rules
    * https://runkit.com/mithunsatheesh/runkit-npm-node-rules
    * https://www.npmjs.com/package/node-rules
    * License: MIT


  * https://github.com/auth0/rules
    * License: MIT
    * "Rules are code snippets written in JavaScript that are executed as part of the authentication pipeline in Auth0"
    * https://auth0.com/docs/rules
    * https://github.com/auth0/rules/blob/master/rules.json
  
  * OpenHAB
    * https://community.openhab.org/
    * https://github.com/openhab
    * https://www.openhab.org/docs/
      * "The open Home Automation Bus (openHAB, pronounced ˈəʊpənˈhæb) is an open source, technology agnostic home automation platform which runs as the center of your smart home!"
    * https://www.openhab.org/docs/configuration/rules-dsl.html
    * Experimental Next-Gen Rules Engine (NGERE)
      * https://www.openhab.org/docs/configuration/jsr223.html
        * "Note: This feature is for users who have or are willing to learn some programming skills and are comfortable working with the command line prompt of the operating system hosting openHAB. The Experimental Rule Engine add-on must be installed to define rules."
        * "JSR223 (spec ) is a standard scripting API for Java Virtual Machine (JVM) languages . The JVM languages provide varying levels of support for the JSR223 API and interoperability with the Java runtime. Currently the following languages are known to work well for openHAB scripting: Oracle Nashorn (Javascript bundled with Java), Jython (Python on the JVM) and Apache Groovy (JVM scripting language)."
    * https://www.openhab.org/docs/configuration/rules-ng.html
      * "Since openHAB 2.4 another Rule Engine has been added. It works fundamentally different than what you find with our current Rules. It allows Rules to be edited in a graphical fashion and to interact with JSR223 Scripts (Javascript, Jypthon, etc)."
        * "In general this rule engine aims to support rules defined with syntax similar to:"
          * ```ON item_id state changed IF item_id.state == desired_value THEN item_id2.state = desired_value2 ```
        * "A rule consists of basic information like name, tags and a description. The main building blocks of rules are modules however, and each rule consists of one or more instances of each of the following modules:"
          * "'trigger' modules specify the events that trigger a rule execution."
          * "'condition' modules act as a filter for rule execution. Actions of the rule will be executed only if event data satisfies all conditions. In case there are multiple conditions in the 'if' section then all of them must be satisfied."
          * "'action' modules perform actual operations in openHAB. If more than one action is specified in a rule they will be executed sequentially. The output of the previous action can be used as an input for the next action. An imaginary action can therefore also just be a conversion to make one action output compatible to another actions input."
          * https://www.openhab.org/docs/configuration/rules-ng.html#defining-rules-via-json
      * https://community.openhab.org/t/experimental-next-gen-rules-engine-documentation-4-of-writing-scripts/55963

  * https://blogs.sap.com/2018/03/28/frontend-business-rules-engine-with-ui5-or-how-i-made-myself-superfluous/

