import React from 'react';
import styles from './parameterExplain.css';

export default function ParameterExplain({children, parameter, typ, defaultVal, possibleValues}) {
if (defaultVal!=undefined) {
    if (defaultVal=="") {
        defaultVal = "null";
    } else if (typ == "string") {
        defaultVal = `'${defaultVal}'`;
    }
}

if (possibleValues!=undefined) {
    possibleValues = JSON.parse(possibleValues);
    possibleValues = possibleValues.map(e => typ == "string"?"'"+e+"'":e).join(", ");
}

return (
    <div className="parameter">
        <table className="parameter">
            <tr className="parameter">
                <td className="parameter">
                    <table className="parameter">
                        <tr className="parameter">
                            <td className="parameter values">
                                <code>
                                    {parameter}
                                </code>
                            </td>
                        </tr>
                        <tr className="parameter">
                            <td className="parameter values">
                                <code className="dataTyp">
                                    {typ}
                                </code>
                            </td>
                        </tr>
                        <tr className="parameter">
                            <td className="parameter values">
                                <code className={defaultVal==undefined?'required':'optional'}>
                                    {defaultVal==undefined?'REQUIRED':defaultVal=="null"?"OPTIONAL":('Default: '+defaultVal)}
                                </code>
                            </td>
                        </tr>
                    </table>
                </td>
                <td className="parameter" width={20}></td>
                <td className="parameter">
                    <div className={(possibleValues==undefined?"hidden ":"")}>
                        <code className="possible-values">
                            Possible Values: {possibleValues}
                        </code>
                        <br/>
                    </div>
                    {children}
                </td>
            </tr>
        </table>
    </div>
    );
}